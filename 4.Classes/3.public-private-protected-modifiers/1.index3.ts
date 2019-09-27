class Animal3 {
  public name: string;
  public constructor(name: string) { this.name = name; }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}