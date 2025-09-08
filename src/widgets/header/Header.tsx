import { Flex, FormatNumber, Heading, IconButton, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { CartModal } from 'widgets/cart-modal/CartModal.tsx';

import { ICartItem } from 'entities/entities.ts';

import { IcCart } from 'shared/assets/icons/IcCart.tsx';
import { IcPizzaLogo } from 'shared/assets/icons/IcPizzaLogo.tsx';

export const Header = () => {
    const [totalCartPrice, setTotalCartPrice] = useState<number>(0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const calculateTotalCartPrice = (cartItems: ICartItem[]): number => {
        return cartItems.reduce((total, item) => {
            const additionsPrice = item.selectedAdds.reduce((sum, add) => sum + add.price, 0);
            const itemTotalPrice = (item.product.price + additionsPrice) * item.count;
            return total + itemTotalPrice;
        }, 0);
    };

    useEffect(() => {
        const handleStorageChange = () => {
            const cartData = sessionStorage.getItem('cart');
            if (cartData) {
                const cartItems: ICartItem[] = JSON.parse(cartData);
                const totalPrice = calculateTotalCartPrice(cartItems);
                setTotalCartPrice(totalPrice);
            } else {
                setTotalCartPrice(0);
            }
        };

        handleStorageChange();

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('cartUpdated', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('cartUpdated', handleStorageChange);
        };
    }, []);

    return (
        <>
            <Flex
                align='center'
                justify='space-between'
                w={'100%'}
                p={'12px 24px'}
                bgColor='gray.200'
            >
                <Flex align='center' gap='12px'>
                    <IcPizzaLogo />
                    <Heading>Конструктор пиццы</Heading>
                </Flex>

                <Flex align='center' gap='12px'>
                    <Flex gap='4px'>
                        <FormatNumber value={totalCartPrice} />
                        <Text>руб.</Text>
                    </Flex>
                    <IconButton
                        aria-label='cart'
                        bgColor='gray.200'
                        h={'36px'}
                        size='2xl'
                        style={{ minWidth: '36px' }}
                        onClick={() => setIsCartOpen(true)}
                    >
                        <IcCart />
                    </IconButton>
                </Flex>
            </Flex>

            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};
