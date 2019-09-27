class PersonD2 {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class EmployeeD2 extends PersonD2 {
  department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let employeeD2 = new EmployeeD2('Howard', 'Sales');
console.log(employeeD2.getElevatorPitch());
console.log(employeeD2.name);