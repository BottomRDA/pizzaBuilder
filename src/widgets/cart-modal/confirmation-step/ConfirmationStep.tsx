import { Box, VStack } from '@chakra-ui/react';

import { CustomerInfo } from 'widgets/cart-modal/confirmation-step/customer-info/CustomerInfo.tsx';
import { OrderSummary } from 'widgets/cart-modal/confirmation-step/order-summary/OrderSummary.tsx';

import { ICartItem, IOrderData } from 'entities/entities.ts';

interface ConfirmationStepProps {
    cartItems: ICartItem[];
    orderData: IOrderData;
}

export const ConfirmationStep = ({ cartItems, orderData }: ConfirmationStepProps) => {
    return (
        <VStack align='stretch'>
            <OrderSummary cartItems={cartItems} />
            <Box height='1px' bg='gray.200' />
            <CustomerInfo orderData={orderData} />
        </VStack>
    );
};
