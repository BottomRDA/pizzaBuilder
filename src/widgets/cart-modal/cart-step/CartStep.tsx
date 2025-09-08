import { VStack, EmptyState } from '@chakra-ui/react';

import { CartItemCard } from 'widgets/cart-modal/cart-step/cart-item-card/CartItemCard.tsx';

import { ICartItem } from 'entities/entities.ts';

import { IcCart } from 'shared/assets/icons/IcCart.tsx';

interface CartStepProps {
    cartItems: ICartItem[];
    updateItemCount: (index: number, newCount: number) => void;
    removeItem: (index: number) => void;
}

export const CartStep = ({ cartItems, updateItemCount, removeItem }: CartStepProps) => {
    return (
        <VStack align='stretch' overflow='auto'>
            {cartItems.length === 0 ? (
                <EmptyState.Root>
                    <EmptyState.Content>
                        <EmptyState.Indicator>
                            <IcCart />
                        </EmptyState.Indicator>
                        <VStack textAlign='center'>
                            <EmptyState.Title>Корзина пустая</EmptyState.Title>
                            <EmptyState.Description>
                                Добавьте товары, чтобы продолжить
                            </EmptyState.Description>
                        </VStack>
                    </EmptyState.Content>
                </EmptyState.Root>
            ) : (
                cartItems.map((item, index) => (
                    <CartItemCard
                        key={index}
                        item={item}
                        index={index}
                        updateItemCount={updateItemCount}
                        removeItem={removeItem}
                    />
                ))
            )}
        </VStack>
    );
};
