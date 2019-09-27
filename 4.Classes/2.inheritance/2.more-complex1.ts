class AnimalB1 {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class SnakeB1 extends AnimalB1 {
  constructor(name: string) { super(name); }
  move(distanceInMeters: number = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class HorseB1 extends AnimalB1 {
  constructor(name: string) { super(name); }
  move(distanceInMeters: number = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

let snakeB1 = new SnakeB1('Summy the Python');
let horseB1 = new HorseB1('Tommy the Palomino');

snakeB1.move();
horseB1.move(34);