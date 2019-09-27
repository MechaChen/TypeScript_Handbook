const fullNameMaxLength1 = 10;

class Employee1 {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength1) {
      throw new Error('fullName has a max length of ' + fullNameMaxLength1);
    }

    this._fullName = newName;
  }
}

let employee1 = new Employee1();
employee1.fullName = 'yeeeeeeeeeeeeeee';