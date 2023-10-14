const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(5)(3));
const curriedMultiplyBy5 = curriedMultiply(5);
//currying to save on memory or at least the amount that our computer has to work
console.log(curriedMultiplyBy5(4));
console.log(curriedMultiplyBy5(4));
console.log(curriedMultiplyBy5(4));
