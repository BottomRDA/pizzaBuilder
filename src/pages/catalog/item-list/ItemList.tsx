import { GridItem, SimpleGrid } from '@chakra-ui/react';

import { CardItem } from 'pages/catalog/card/Card.tsx';

import { IProduct } from 'entities/entities.ts';

interface IItemList {
    list: IProduct[];
    textCardButton: string;
}
export const ItemList = ({ list, textCardButton }: IItemList) => {
    return (
        <SimpleGrid
            minChildWidth='300px'
            gap={{ base: '12px', lg: '24px' }}
            width='100%'
            p='24px'
            overflow='auto'
            style={{ justifyItems: 'center' }}
        >
            {list.map((item) => (
                <GridItem key={item.id} w='300px'>
                    <CardItem item={item} textButton={textCardButton} />
                </GridItem>
            ))}
        </SimpleGrid>
    );
};
