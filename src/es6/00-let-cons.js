var lastName = 'Valencia';
lastName = 'Rincon';

console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple'; // global scrope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; // block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruits();
