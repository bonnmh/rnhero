
const Firework = require('./fireworks.json');

export const lottiesComponents = {
    firework: Firework,
};
export type lottiesTypes = keyof typeof lottiesComponents;
