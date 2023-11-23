const RULES = {
    OFF: 'off',
    ON: 'on',
    WARN: 'warn',
    ERROR: 'error'
}

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',

    },
    plugins: [
        'react'
    ],
    rules: {
        'react/react-in-jsx-scope': RULES.OFF,
        'react/prop-types': RULES.OFF,
        '@typescript-eslint/space-before-function-paren': RULES.OFF,
        '@typescript-eslint/explicit-function-return-type': RULES.OFF,
    }
}
