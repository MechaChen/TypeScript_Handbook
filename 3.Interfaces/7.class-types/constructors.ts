interface ClockConstructor {
  new (hour: number, minute: number);
};

interface ClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, h: number, m: number): ClockInterface {
  return new ctor(h, m);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {};
  tick() { console.log('beep beep') };
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {};
  tick() { console.log('tik tok') };
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);