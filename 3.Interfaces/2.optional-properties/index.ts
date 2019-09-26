interface SquareConfig {
  color?: string,
  width?: number,
};

interface createdSquare {
  color: string,
  area: number,
}

function createSquare(config: SquareConfig): createdSquare {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = Math.pow(config.width, 2);
  }
  return newSquare;
}

let mySquare = createSquare({ color: 'black' });
console.log(mySquare);