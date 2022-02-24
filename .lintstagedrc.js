/**
 * lint-staged config
 * @ref https://www.npmjs.com/package/lint-staged
 * @desc generated at 2/24/2022, 4:15:22 PM by streakingman-cli@1.3.3
 */

module.exports = {
    '*.{[tj]s,[tj]sx,[cm]js}': ['eslint --fix'],
    '*.json': ['prettier --write'],
};
