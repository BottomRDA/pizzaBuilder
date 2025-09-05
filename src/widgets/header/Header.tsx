import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Cart } from 'shared/assets/icons/Cart.tsx';

interface IHeader {
    logo: ReactNode;
    title: string;
}

export const Header = ({ logo, title }: IHeader) => {
    return (
        <Flex align='center' justify='space-between' w={'100%'} p={'12px 24px'} bgColor={'#fff3e0'}>
            <Flex align='center' gap='12px'>
                {logo}
                <Heading>{title}</Heading>
            </Flex>

            <IconButton
                aria-label='Basket'
                bgColor={'#fff3e0'}
                h={'36px'}
                size='2xl'
                style={{ minWidth: '36px' }}
            >
                <Cart />
            </IconButton>
        </Flex>
    );
};
