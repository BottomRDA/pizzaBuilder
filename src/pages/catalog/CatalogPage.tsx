import { VStack } from '@chakra-ui/react';

import { ItemList } from 'pages/catalog/item-list/ItemList.tsx';

import { Header } from 'widgets/header/Header.tsx';

import { listPizzas } from 'entities/mock-data.ts';

export const CatalogPage = () => {
    return (
        <VStack w='100%' h={'100vh'} overflow='hidden'>
            <Header />
            <ItemList list={listPizzas} textCardButton={'Добавить в корзину'} />
        </VStack>
    );
};
