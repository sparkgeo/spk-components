module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        "vitest-globals/env": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "airbnb",
        "airbnb/hooks",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs", "!.storybook"],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { 
        react: { version: "18.2" },
        "import/resolver": {
            "node": {
              "extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
            }
          }
    },
    plugins: ["react-refresh", "vitest-globals"],
    rules: {
        "react/jsx-no-target-blank": "off",
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true },
        ],
        indent: ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/function-component-definition": [
            "error",
            {
                namedComponents: ["arrow-function"],
                unnamedComponents: ["arrow-function"],
            },
        ],
        "import/prefer-default-export": ["off"],
        "react/require-default-props": ["off"],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
          ],
          "react/react-in-jsx-scope": "off",
        },
    overrides: [
        {
            "files": ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
            "rules": {
                'react-hooks/rules-of-hooks': 'off',
            }
        }
    ]
};
