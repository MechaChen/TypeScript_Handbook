abstract class Department {
  constructor(public name: string) {
  }

  printName(): void {
    console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department;
department = new Department();
department = new AccountingDepartment();

department.printName();
department.printMeeting();
department.generateReports();