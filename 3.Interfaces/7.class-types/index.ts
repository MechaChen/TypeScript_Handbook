interface ClockInterfaceA {
  currentTime: Date;
}

class ClockA implements ClockInterfaceA {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}