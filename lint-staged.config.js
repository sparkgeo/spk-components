import { ESLint } from 'eslint'

const removeIgnoredFiles = async (files) => {
    const eslint = new ESLint()
    const isIgnored = await Promise.all(
        files.map((file) => eslint.isPathIgnored(file))
    )
    const filteredFiles = files.filter((_, i) => !isIgnored[i])
    return filteredFiles.join(' ')
}

export default {
    '**/*.{ts,tsx,js,jsx}': async (files) => {
        try {
            const filesToLint = await removeIgnoredFiles(files)
            return [`eslint --max-warnings=0 ${filesToLint}`]
        } catch (error) {
            /* eslint-disable no-console */
            console.error('Linting failed:', error);
            return Promise.reject(error);
        }
    },
}