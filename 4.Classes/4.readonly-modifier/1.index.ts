class Octopus {
  readonly name: string;
  readonly obj = { age: 26 };
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
    this.name = theName;
  }
  public setName(name) {
    this.name = name;
  }

  public setAge(age) {
    this.obj.age = age;
  }
}

let dad = new Octopus('Man with the 8 strong legs');
dad.name = 'Man with the 3-piece suit';