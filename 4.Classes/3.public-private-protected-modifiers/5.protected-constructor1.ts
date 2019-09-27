class PersonE1 {
  name: string;
  protected constructor(name: string) { this.name = name; }
}

class EmployeeE1 extends PersonE1 {
  department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitchE1() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

let employeeE1 = new EmployeeE1('Howard', 'Sales');
let personE1 = new PersonE1('John');
