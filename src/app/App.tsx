import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import { CatalogPage } from 'pages/catalog/CatalogPage.tsx';

const theme = defineConfig({
    theme: {
        tokens: {
            colors: {},
        },
    },
});

const system = createSystem(defaultConfig, theme);

export const App = () => {
    return (
        <ChakraProvider value={system}>
            <CatalogPage />
        </ChakraProvider>
    );
};
