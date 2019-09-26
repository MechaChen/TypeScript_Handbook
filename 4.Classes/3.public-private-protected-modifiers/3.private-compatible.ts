class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

// Inheritance Class
class Rhino extends Animal {
  constructor() { super('Rhino'); }
}

// Similar Class
class Employee {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let animal = new Animal('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');

animal = rhino;
animal = employee;