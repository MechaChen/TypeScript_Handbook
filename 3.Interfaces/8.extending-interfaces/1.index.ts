interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

// let square : Square;
let square = {} as Square;
square.color = 'blue';
square.sideLength = 10;