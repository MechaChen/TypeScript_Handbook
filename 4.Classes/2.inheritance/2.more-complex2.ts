class AnimalB2 {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class SnakeB2 extends AnimalB2 {
  constructor(name: string) { super(name); }
  move(distanceInMeters: number = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class HorseB2 extends AnimalB2 {
  constructor(name: string) { super(name); }
  move(distanceInMeters: number = 40) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

let snakeB2 = new SnakeB2('Summy the Python');
let horseB2 = new HorseB2('Tommy the Palomino');

snakeB2.move();
horseB2.move(34);