// flat
const array = [1, 2, 3, 4, [1, 2, 3, [1, 2]]];

console.log(array);
console.log(array.flat(3));

// flat-map
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.flatMap((value) => [value, value * 2]));
