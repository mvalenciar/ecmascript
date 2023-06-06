class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  #speak() {
    return 'hello';
  }

  gretting() {
    return `${this.speak()} ${this.name}`;
  }

  get age() {
    return age;
  }

  set age(newAge) {
    this.age = newAge;
  }
}
