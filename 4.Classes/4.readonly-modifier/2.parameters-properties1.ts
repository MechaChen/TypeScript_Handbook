class OctopusB1 {
  constructor(readonly name: string) {}
  public getName(): void {
    console.log(this.name);
  }
}

let manB1 = new OctopusB1('OOOctopus');
manB1.getName();