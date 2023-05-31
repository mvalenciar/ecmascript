// arrays destructuring

const fruits = ['Apple', 'Banana'];
const [a, b] = fruits;
console.log(a, b);

// object destructuring

const user = {
  name: 'Milton',
  age: '30',
};
const { name, age } = user;
console.log(name, age);

// spread operator

const person = {
  name: 'Milton',
  age: 30,
};

const country = 'colombia';

const data = { ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
}

sum(1, 2, 3);
