// ES2015 Arrow Functions Shorthand
const double = arr => arr.map(val => val * 2);

// Refactor
const squareAndFindEvens = nums => nums.map(num => num ** 2).filter(square => square % 2 === 0);
