class PersonD1 {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class EmployeeD1 extends PersonD1 {
  department: string;

  constructor(name: string, department: string) { 
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

let employeeD1 = new EmployeeD1('Howard', 'Sales');
console.log(employeeD1.getElevatorPitch());
console.log(employeeD1.name);