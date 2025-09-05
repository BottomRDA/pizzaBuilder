import { Button, Image, Card, Text } from '@chakra-ui/react';

import { TPizza } from 'entities/entities.ts';

interface ICardItem {
    item: TPizza;
    textButton: string;
}

export const CardItem = ({ item, textButton }: ICardItem) => {
    return (
        <Card.Root>
            <Card.Body gap='4'>
                <Image
                    src={item.image}
                    alt={item.name}
                    width='150px'
                    height='150px'
                    objectFit='cover'
                    bg={'#33333333'}
                    mx='auto'
                />
                <Card.Title>{item.name}</Card.Title>
                <Text textStyle='2xl' fontWeight='medium' letterSpacing='tight' mt='2'>
                    {item.price} руб.
                </Text>
            </Card.Body>
            <Card.Footer justifyContent='flex-end'>
                <Button>{textButton}</Button>
            </Card.Footer>
        </Card.Root>
    );
};
