import { Box, Text } from '@chakra-ui/react';

import { IOrderData } from 'entities/entities.ts';

interface CustomerInfoProps {
    orderData: IOrderData;
}

export const CustomerInfo = ({ orderData }: CustomerInfoProps) => (
    <Box>
        <Text fontWeight='bold' fontSize='lg' mb={2}>
            Данные клиента:
        </Text>
        <Text>Имя: {orderData.name}</Text>
        <Text>Телефон: {orderData.phone}</Text>
        <Text>Адрес: {orderData.address}</Text>
        {orderData.comment && <Text>Комментарий: {orderData.comment}</Text>}
    </Box>
);
