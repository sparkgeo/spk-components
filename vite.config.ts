import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vitest/config";
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css';

import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        libInjectCss(),
        dts({
            insertTypesEntry: true,
            include: ['src'],
            outDir: 'dist',
            rollupTypes: true
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.ts'],
    },
    build: {
        lib: {
            entry: resolve("src", "components/index.ts"),
            name: "SpkLibrary",
            formats: ["es", "umd"],
            fileName: (format) => `spk-library.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            output: {
                globals: {
                    react: "React",
                    "@fortawesome/react-fontawesome": "FontAwesome",
                    "@fortawesome/free-solid-svg-icons": "FreeSolidSvgIcons",
                },
            },
        },
    },
});
