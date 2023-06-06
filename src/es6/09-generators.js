// function* iterate(array) {
//   for (const value of array) {
//     yield value;
//   }
// }

// const it = iterate(['milton', 'marina', 'alberto', 'henrry']);

// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

function* getId() {
  let lastId = 1;
  while (true) {
    yield lastId++;
  }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
