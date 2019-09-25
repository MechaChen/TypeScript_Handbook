interface ClockInterfaceA {
  currentTime: Date;
  setTime(d: Date): void;
}

class ClockA implements ClockInterfaceA {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}