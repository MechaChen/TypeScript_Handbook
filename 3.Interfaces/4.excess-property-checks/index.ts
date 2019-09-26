interface SquareConfig {
  color?: string,
  width?: number,
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'red', area: 100 };
  if(config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = Math.pow(config.width, 2);
  }
  return newSquare;
}

let mySquare = createSquare({ colour: 'red', width: 100 });

let mySquare1 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);