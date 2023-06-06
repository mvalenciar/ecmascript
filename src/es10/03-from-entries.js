const entries = new Map([
  ['name', 'Milton'],
  ['age', 30],
]);

console.log('Map', entries);
console.log('Object Entries', Object.entries(entries));
console.log('Object From Entries', Object.fromEntries(entries));
