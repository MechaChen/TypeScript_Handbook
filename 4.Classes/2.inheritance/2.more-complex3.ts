class AnimalB3 {
  name: string;
  constructor(theName: string) { this.name = theName };
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved in ${distanceInMeters}m.`);
  }
}

class SnakeB3 extends AnimalB3 {
  constructor(name: string) { super(name); }
  move(distanceInMeters: number = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class HorseB3 extends AnimalB3 {
  constructor(name: string) { super(name); }
  move(distanceInMeters: number = 40) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

let snakeB3 = new SnakeB3('Summy the Python');
let horseB3 = new HorseB3('Tommy the Palomino');

snakeB3.move();
horseB3.move(34);