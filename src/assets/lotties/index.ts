
const Firework = require('./fireworks.json');
const HappyNewYear = require('./happynewyear.json');

export const lottiesComponents = {
    firework: Firework,
    happy_new_year: HappyNewYear
};
export type lottiesTypes = keyof typeof lottiesComponents;
