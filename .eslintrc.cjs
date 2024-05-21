module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended', "airbnb", "airbnb/hooks"],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
        ],
        'import/no-extraneous-dependencies': ["error", {"devDependencies": true}],
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/function-component-definition": ["error", 
            {
                "namedComponents": ["arrow-function"],
                "unnamedComponents":  ["arrow-function"]
            }
        ],
        'import/prefer-default-export': ['off']
    },
}
