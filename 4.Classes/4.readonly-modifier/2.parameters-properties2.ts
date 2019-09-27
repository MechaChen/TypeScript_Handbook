class OctopusB2 {
  constructor(readonly name: string) {}

  public getName(): void {
    console.log(this.name);
  }
}

let manB2 = new OctopusB2('OOOctopus');
manB2.getName();