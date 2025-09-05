import { VStack } from '@chakra-ui/react';

import { Header } from 'widgets/header/Header.tsx';
import { ListItems } from 'widgets/list-items/ListItems.tsx';

import { listPizzas } from 'entities/data.ts';

import { PizzaLogo } from 'shared/assets/icons/PizzaLogo.tsx';

export const CatalogPage = () => {
    return (
        <VStack w='100%' h={'100vh'} overflow='hidden'>
            <Header logo={<PizzaLogo />} title='Конструктор пицц' />
            <ListItems list={listPizzas} />
        </VStack>
    );
};
