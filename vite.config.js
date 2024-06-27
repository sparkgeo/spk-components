import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve("src", "components/index.js"),
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
