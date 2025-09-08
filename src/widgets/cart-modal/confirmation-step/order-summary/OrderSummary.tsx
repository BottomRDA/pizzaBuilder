import { Box, Text } from '@chakra-ui/react';

import { ICartItem } from 'entities/entities.ts';

interface OrderSummaryProps {
    cartItems: ICartItem[];
}

export const OrderSummary = ({ cartItems }: OrderSummaryProps) => (
    <Box maxHeight='30vh' overflow='auto'>
        <Text fontWeight='bold' fontSize='lg' mb={2}>
            Состав заказа:
        </Text>
        {cartItems.map((item, index) => {
            const itemPrice =
                item.product.price + item.selectedAdds.reduce((sum, add) => sum + add.price, 0);
            const totalItemPrice = itemPrice * item.count;

            return (
                <Box key={index} mb={2}>
                    <Text>
                        {item.count} x {item.product.name}
                        {item.selectedAdds.length > 0 &&
                            ` (${item.selectedAdds.map((add) => add.name).join(', ')})`}
                    </Text>
                    <Text color='gray.600'>{totalItemPrice.toLocaleString('ru-RU')} ₽</Text>
                </Box>
            );
        })}
    </Box>
);
