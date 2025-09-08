import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Dialog,
    Portal,
    CloseButton,
    Text,
    Steps,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { CartStep } from 'widgets/cart-modal/cart-step/CartStep.tsx';
import { ConfirmationStep } from 'widgets/cart-modal/confirmation-step/ConfirmationStep.tsx';
import { DataStep } from 'widgets/cart-modal/data-step/DataStep.tsx';
import { STEPS_LIST } from 'widgets/cart-modal/stepList.ts';

import { IOrderData } from 'entities/entities.ts';

import { useCart } from 'shared/hooks/useCart.tsx';
import { useSteps } from 'shared/hooks/useSteps.tsx';

import { toaster } from '../../components/ui/toaster.ts';

interface ICartModal {
    isOpen: boolean;
    onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: ICartModal) => {
    const [orderData, setOrderData] = useState<IOrderData>({
        name: '',
        phone: '',
        address: '',
        comment: '',
    });

    const { cartItems, totalPrice, updateItemCount, removeItem, clearCart } = useCart();
    const { currentStep, nextStep, prevStep, resetSteps } = useSteps(STEPS_LIST.length);

    const form = useForm<IOrderData>({
        defaultValues: {
            name: '',
            phone: '',
            address: '',
            comment: '',
        },
    });

    const { watch, setValue, reset, trigger } = form;
    const formValues = watch();

    const confirmOrder = () => {
        toaster.create({
            title: 'Заказ оформлен',
            description: 'Ваш заказ успешно оформлен!',
            type: 'success',
        });

        clearCart();
        reset();
        resetSteps();
        onClose();
    };

    const canGoToNextStep = async (): Promise<boolean> => {
        if (currentStep === 0) {
            if (cartItems.length === 0) {
                toaster.create({
                    title: 'Корзина пуста',
                    description: 'Добавьте товары в корзину',
                    type: 'warning',
                });
                return false;
            }
            return true;
        }

        if (currentStep === 1) {
            const isValid = await trigger();
            if (!isValid) {
                toaster.create({
                    title: 'Ошибка заполнения',
                    description: 'Пожалуйста, проверьте все обязательные поля',
                    type: 'error',
                });
                return false;
            }
            setOrderData(formValues);
            return true;
        }

        return true;
    };

    const handleNextStep = async () => {
        const canProceed = await canGoToNextStep();
        if (canProceed) {
            nextStep();
        }
    };

    const handleClose = () => {
        reset();
        resetSteps();
        onClose();
    };

    const renderCurrentContent = () => {
        switch (STEPS_LIST[currentStep].content) {
            case 'cart':
                return (
                    <CartStep
                        cartItems={cartItems}
                        updateItemCount={updateItemCount}
                        removeItem={removeItem}
                    />
                );
            case 'data':
                return (
                    <DataStep
                        form={form}
                        setValue={(name, value) => setValue(name, value, { shouldValidate: true })}
                    />
                );
            case 'confirmation':
                return <ConfirmationStep cartItems={cartItems} orderData={orderData} />;
            default:
                return null;
        }
    };

    return (
        <Dialog.Root
            size={{ mdDown: 'full', md: 'lg' }}
            open={isOpen}
            onOpenChange={(e) => {
                if (!e.open) {
                    handleClose();
                }
            }}
        >
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content maxHeight='80vh'>
                        <Dialog.Header>
                            <Dialog.Title>Оформление заказа</Dialog.Title>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton />
                            </Dialog.CloseTrigger>
                        </Dialog.Header>

                        <Dialog.Body overflow='hidden'>
                            <Steps.Root
                                step={currentStep}
                                count={STEPS_LIST.length - 1}
                                overflow='hidden'
                                flex={1}
                                height={{ mdDown: '70vh', md: '50vh' }}
                            >
                                <Steps.List>
                                    {STEPS_LIST.map((step, index) => (
                                        <Steps.Item key={index} index={index}>
                                            <Steps.Trigger>
                                                <Steps.Indicator />
                                                <Box flexShrink='0'>
                                                    <Steps.Title fontSize='sm'>
                                                        {step.title}
                                                    </Steps.Title>
                                                    <Steps.Description fontSize='xs'>
                                                        {step.description}
                                                    </Steps.Description>
                                                </Box>
                                            </Steps.Trigger>
                                            {index < STEPS_LIST.length - 1 && <Steps.Separator />}
                                        </Steps.Item>
                                    ))}
                                </Steps.List>

                                {renderCurrentContent()}
                            </Steps.Root>
                            <Box>
                                <Box height='1px' bg='gray.200' my={4} />
                                <Text fontSize='xl' fontWeight='bold' textAlign='right'>
                                    Итого: {totalPrice.toLocaleString('ru-RU')} руб.
                                </Text>
                            </Box>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Flex justify='space-between' mt={6}>
                                <ButtonGroup size='sm' variant='outline'>
                                    <Button onClick={prevStep} disabled={currentStep === 0}>
                                        Назад
                                    </Button>

                                    {currentStep < STEPS_LIST.length - 1 ? (
                                        <Button
                                            onClick={handleNextStep}
                                            type={currentStep === 1 ? 'submit' : 'button'}
                                        >
                                            Далее
                                        </Button>
                                    ) : (
                                        <Button onClick={confirmOrder} size='sm'>
                                            Подтвердить заказ
                                        </Button>
                                    )}
                                </ButtonGroup>
                            </Flex>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};
