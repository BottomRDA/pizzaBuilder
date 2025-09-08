import { Button, CloseButton, Dialog, Portal, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';

import { CheckboxAddition } from 'widgets/checkbox/CheckboxAddition.tsx';

import { ICartItem, IAddition, IProduct } from 'entities/entities.ts';

import { ImageCard } from 'shared/ui/image-card/ImageCard.tsx';

interface IModalAdded {
    textButton: string;
    item: IProduct;
}

export const ModalAdded = ({ textButton, item }: IModalAdded) => {
    const [selectedAdditions, setSelectedAdditions] = useState<IAddition[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const totalPrice = useMemo(() => {
        const additionsPrice = selectedAdditions.reduce((sum, add) => sum + add.price, 0);
        return item.price + additionsPrice;
    }, [item.price, selectedAdditions]);

    const handleAdditionsChange = (selectedIds: string[]) => {
        const selected = item.ingredients.filter((ingredient) =>
            selectedIds.includes(String(ingredient.id)),
        );
        setSelectedAdditions(selected);
    };

    const addToCart = () => {
        const currentCart = sessionStorage.getItem('cart');
        const cartItems: ICartItem[] = currentCart ? JSON.parse(currentCart) : [];

        const existingItemIndex = cartItems.findIndex(
            (cartItem) =>
                cartItem.product.id === item.id &&
                JSON.stringify(cartItem.selectedAdds.map((a) => a.id).sort()) ===
                    JSON.stringify(selectedAdditions.map((a) => a.id).sort()),
        );

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].count += 1;
        } else {
            const newCartItem: ICartItem = {
                product: item,
                selectedAdds: selectedAdditions,
                count: 1,
            };
            cartItems.push(newCartItem);
        }

        sessionStorage.setItem('cart', JSON.stringify(cartItems));
        window.dispatchEvent(new CustomEvent('cartUpdated'));

        setIsOpen(false);
    };

    return (
        <Dialog.Root
            size='md'
            placement='center'
            open={isOpen}
            onOpenChange={(e) => setIsOpen(e.open)}
        >
            <Dialog.Trigger asChild>
                <Button variant='outline' size='sm'>
                    {textButton}
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>{`Добавить в корзину ${item.name}`}</Dialog.Title>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size='md' />
                            </Dialog.CloseTrigger>
                        </Dialog.Header>
                        <Dialog.Body display='flex' flexDirection='column' gap='4'>
                            <ImageCard src={item.imageSrc} alt={item.name} />
                            <CheckboxAddition
                                items={item.ingredients}
                                onSelectionChange={handleAdditionsChange}
                                textLegend={'Выберите доп. ингредиенты:'}
                            />
                            <Text fontSize={'lg'} fontWeight={'medium'}>
                                {`Итоговая цена: ${totalPrice} руб.`}
                            </Text>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant='outline'>Отмена</Button>
                            </Dialog.ActionTrigger>
                            <Button onClick={addToCart}>Добавить</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};
