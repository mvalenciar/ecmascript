// Declaración de clase
class User {
  // constructor
  constructor({ name, age, id }) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  // métodos
  speak() {
    return 'Hello';
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

// Instancia de una clase
const milton = new User({
  name: 'Milton',
  age: 30,
  id: 1,
});

console.log(milton);
console.log(milton.greeting());
