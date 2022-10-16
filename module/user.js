export default class User {
  //only default export one thing
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(`User name is: ${user.name}`);
}

export function printAge(user) {
  console.log(`User's age is ${user.age}`);
}
