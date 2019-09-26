class AnimalB {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class SnakeB extends AnimalB {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class HorseB extends AnimalB {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

let sam = new SnakeB('Sammy the Python');
let tom: AnimalB = new HorseB('Tommy the Palomino');

sam.move();
tom.move(34);