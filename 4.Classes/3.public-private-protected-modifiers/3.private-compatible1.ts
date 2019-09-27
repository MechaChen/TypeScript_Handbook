class AnimalC1 {
  private name: string;
  constructor(name: string) { this.name = name; }
}

// Inheritance Class
class RhinoC1 extends AnimalC1 {
  constructor() { super('Rhino'); }
}

// Similar Class 
class EmployeeC1 {
  private name: string;
  constructor(name: string) { this.name = name; }
}

let animalC1 = new AnimalC1('Goat');
let rhinoC1 = new RhinoC1();
let employeeC1 = new EmployeeC1('Bob');

animalC1 = rhinoC1;
animalC1 = employeeC1;