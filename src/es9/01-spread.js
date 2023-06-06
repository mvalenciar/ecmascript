const user = {
  name: 'Milton',
  age: 31,
  country: 'Co',
};

const { username, ...values } = user;

console.log(username);
console.log(values);
