class Octopus1 {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(name: string) {
    this.name = name;
  }
}

let dad1 = new Octopus1('man with 8 strong legs');
dad1.name = 'man with the 3 piece-suit';