import { Box, Button, Card, HStack, VStack, Text } from '@chakra-ui/react';

import { QuantityControls } from 'widgets/cart-modal/cart-step/quantity-controls/QuantityControls.tsx';

import { ICartItem } from 'entities/entities.ts';

import { ImageCard } from 'shared/ui/image-card/ImageCard.tsx';

interface CartItemCardProps {
    item: ICartItem;
    index: number;
    updateItemCount: (index: number, newCount: number) => void;
    removeItem: (index: number) => void;
}

export const CartItemCard = ({ item, index, updateItemCount, removeItem }: CartItemCardProps) => {
    const itemPrice =
        item.product.price + item.selectedAdds.reduce((sum, add) => sum + add.price, 0);
    const totalItemPrice = itemPrice * item.count;

    return (
        <Card.Root variant='outline'>
            <Card.Body>
                <HStack align='start'>
                    <ImageCard src={item.product.imageSrc} alt={item.product.name} />
                    <Box flex={1}>
                        <Text fontWeight='bold'>{item.product.name}</Text>
                        {item.selectedAdds.length > 0 && (
                            <Text fontSize='sm'>
                                Дополнительно: {item.selectedAdds.map((add) => add.name).join(', ')}
                            </Text>
                        )}
                        <Text fontWeight='bold'>
                            {itemPrice} руб. * {item.count} = {totalItemPrice} руб.
                        </Text>
                    </Box>
                    <VStack alignItems='stretch'>
                        <QuantityControls
                            count={item.count}
                            onDecrease={() => updateItemCount(index, item.count - 1)}
                            onIncrease={() => updateItemCount(index, item.count + 1)}
                        />
                        <Button size='sm' onClick={() => removeItem(index)}>
                            Удалить
                        </Button>
                    </VStack>
                </HStack>
            </Card.Body>
        </Card.Root>
    );
};
