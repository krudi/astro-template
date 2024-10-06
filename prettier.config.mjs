/**
 * @type {import('prettier').Config}
 */
export default {
    plugins: ['prettier-plugin-astro'],
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    arrowParens: 'always',
    bracketSameLine: false,
    singleAttributePerLine: true,
    insertPragma: false,
    proseWrap: 'always',
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
