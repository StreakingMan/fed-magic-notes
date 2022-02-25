/**
 * lint-staged config
 * @ref https://www.npmjs.com/package/lint-staged
 * @desc generated at 2/25/2022, 12:09:07 PM by streakingman-cli@1.4.0
 */

module.exports = {
    '*.{[tj]s,[tj]sx,[cm]js}': ['eslint --fix'],
    '*.json': ['prettier --write'],
};
