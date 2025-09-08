import { useState, useEffect, useCallback } from 'react';

import { ICartItem } from 'entities/entities.ts';

export const useCart = () => {
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);

    const updateCartFromStorage = useCallback(() => {
        const cartData = sessionStorage.getItem('cart');
        if (cartData) {
            try {
                setCartItems(JSON.parse(cartData));
            } catch {
                setCartItems([]);
            }
        } else {
            setCartItems([]);
        }
    }, []);

    useEffect(() => {
        updateCartFromStorage();

        const handleCartUpdate = () => {
            updateCartFromStorage();
        };

        window.addEventListener('cartUpdated', handleCartUpdate);

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'cart') {
                updateCartFromStorage();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdate);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [updateCartFromStorage]);

    const updateItemCount = (index: number, newCount: number) => {
        if (newCount < 1) return;

        const updatedItems = [...cartItems];
        updatedItems[index].count = newCount;
        setCartItems(updatedItems);
        sessionStorage.setItem('cart', JSON.stringify(updatedItems));
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    };

    const removeItem = (index: number) => {
        const updatedItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedItems);
        sessionStorage.setItem('cart', JSON.stringify(updatedItems));
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    };

    const clearCart = () => {
        setCartItems([]);
        sessionStorage.removeItem('cart');
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    };

    const totalPrice = cartItems.reduce((total, item) => {
        const itemPrice =
            item.product.price + item.selectedAdds.reduce((sum, add) => sum + add.price, 0);
        return total + itemPrice * item.count;
    }, 0);

    return {
        cartItems,
        totalPrice,
        updateItemCount,
        removeItem,
        clearCart,
        setCartItems,
    };
};
