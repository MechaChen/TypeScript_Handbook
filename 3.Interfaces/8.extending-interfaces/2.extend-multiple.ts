interface ShapeB {
  color: string;
}

interface PenStrokeB {
  penWidth: number;
}

interface SquareB extends ShapeB, PenStrokeB {
  sideLength: number;
}

let squareB = {} as SquareB;
squareB.color = 'red';
squareB.penWidth = 10;
squareB.sideLength = 30;