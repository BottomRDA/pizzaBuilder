import { Card, Text } from '@chakra-ui/react';

import { ModalAdded } from 'pages/catalog/modal/ModalAdded.tsx';

import { IProduct } from 'entities/entities.ts';

import { ImageCard } from 'shared/ui/image-card/ImageCard.tsx';

interface ICardItem {
    item: IProduct;
    textButton: string;
}

export const CardItem = ({ item, textButton }: ICardItem) => {
    return (
        <>
            <Card.Root>
                <Card.Body gap='4'>
                    <ImageCard src={item.imageSrc} alt={item.name} />
                    <Card.Title>{item.name}</Card.Title>
                    <Text textStyle='2xl' fontWeight='medium' letterSpacing='tight' mt='2'>
                        {item.price} руб.
                    </Text>
                </Card.Body>
                <Card.Footer justifyContent='flex-end'>
                    <ModalAdded textButton={textButton} item={item} />
                </Card.Footer>
            </Card.Root>
        </>
    );
};
