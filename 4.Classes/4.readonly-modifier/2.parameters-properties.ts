class OctopusB {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {
    // initialize name without any statement
  }
  getName(): void {
    console.log(this.name);
  }
}

let manB = new OctopusB('OOOctopus');
manB.getName();