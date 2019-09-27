const fullNameMaxLength2 = 10;

class Employee2 {
  _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if(newName && newName.length > fullNameMaxLength2) {
      throw new Error('fullName has a max length of' + fullNameMaxLength2);
    }

    this._fullName = newName;
  }
}

let man2 = new Employee2();
man2.fullName = 'yeeeeeeeeeeeee';