import { Field, Input, Stack, Textarea } from '@chakra-ui/react';
import { UseFormReturn } from 'react-hook-form';

import { IOrderData } from 'entities/entities.ts';

import { phoneUtils, validatePhone } from 'shared/utils/phoneUtils.ts';

interface DataStepProps {
    form: UseFormReturn<IOrderData>;
    setValue: (name: keyof IOrderData, value: string) => void;
}

export const DataStep = ({ form, setValue }: DataStepProps) => {
    const {
        register,
        formState: { errors },
    } = form;

    const registerPhone = register('phone', {
        required: 'Телефон обязателен',
        validate: {
            validPhone: (value) => validatePhone(value) || 'Введите корректный номер телефона',
        },
        onChange: (e) => {
            const formatted = phoneUtils(e.target.value);
            setValue('phone', formatted);
        },
    });

    return (
        <Stack gap='4'>
            <Field.Root invalid={!!errors.name}>
                <Field.Label>Имя *</Field.Label>
                <Input
                    placeholder='Введите ваше имя'
                    {...register('name', {
                        required: 'Имя обязательно',
                        minLength: {
                            value: 2,
                            message: 'Имя должно содержать минимум 2 символа',
                        },
                    })}
                />
                <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.phone}>
                <Field.Label>Телефон *</Field.Label>
                <Input placeholder='+7 (999) 999-99-99' maxLength={18} {...registerPhone} />
                <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.address}>
                <Field.Label>Адрес доставки *</Field.Label>
                <Input
                    placeholder='Введите адрес доставки'
                    {...register('address', {
                        required: 'Адрес обязателен',
                        minLength: {
                            value: 5,
                            message: 'Адрес должен содержать минимум 5 символов',
                        },
                    })}
                />
                <Field.ErrorText>{errors.address?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root>
                <Field.Label>Комментарий к заказу</Field.Label>
                <Textarea
                    placeholder='Дополнительные пожелания к заказу'
                    rows={3}
                    {...register('comment')}
                />
            </Field.Root>
        </Stack>
    );
};
