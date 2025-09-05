import path from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/app'),
            shared: path.resolve(__dirname, 'src/shared'),
            widgets: path.resolve(__dirname, 'src/widgets'),
            entities: path.resolve(__dirname, 'src/entities'),
            features: path.resolve(__dirname, 'src/features'),
            pages: path.resolve(__dirname, 'src/pages'),
        },
    },
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
});
