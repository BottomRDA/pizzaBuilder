import { GridItem, SimpleGrid } from '@chakra-ui/react';

import { CardItem } from 'widgets/card/Card.tsx';

import { TPizza } from 'entities/entities.ts';
interface IListItems {
    list: TPizza[];
    textCardButton: string;
}
export const ListItems = ({ list, textCardButton }: IListItems) => {
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
