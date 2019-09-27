class Grid1 {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: {x: number, y: number}) {
    let xDist = (point.x - Grid1.origin.x);
    let yDist = (point.y - Grid1.origin.y);
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  }
  constructor (public scale: number) {};
}

let grid11 = new Grid1(1.0);
let grid12 = new Grid1(5.0);

console.log(grid11.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid12.calculateDistanceFromOrigin({x: 10, y: 10}));