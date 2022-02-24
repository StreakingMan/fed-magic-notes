/**
 * eslint config
 * @ref http://eslint.cn/
 * @desc generated at 2/24/2022, 4:15:01 PM by streakingman-cli@1.3.3
 */

module.exports = {
    parserOptions: {
        ecmaVersion: 11,
    },
    env: {
        es6: true,
    },
    plugins: ['eslint-plugin-prettier'],
    extends: ['plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 'error',
    },
};
