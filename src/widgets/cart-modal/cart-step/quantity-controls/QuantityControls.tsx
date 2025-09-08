import { HStack, IconButton, Text } from '@chakra-ui/react';

interface QuantityControlsProps {
    count: number;
    onDecrease: () => void;
    onIncrease: () => void;
}

export const QuantityControls = ({ count, onDecrease, onIncrease }: QuantityControlsProps) => (
    <HStack>
        <IconButton aria-label='Уменьшить количество' size='sm' onClick={onDecrease}>
            -
        </IconButton>
        <Text>{count}</Text>
        <IconButton aria-label='Увеличить количество' size='sm' onClick={onIncrease}>
            +
        </IconButton>
    </HStack>
);
