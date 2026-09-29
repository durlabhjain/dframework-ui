import { defineConfig } from 'vitest/config';
import { transformWithOxc } from 'vite';

export default defineConfig({
    plugins: [{
        name: 'jsx-in-js',
        enforce: 'pre',
        transform(code, id) {
            if (/\/src\/.*\.js$/.test(id)) return transformWithOxc(code, id, { lang: 'jsx', jsx: { runtime: 'automatic' } });
        }
    }],
    test: { environment: 'jsdom', include: ['tests/**/*.test.jsx'] }
});
