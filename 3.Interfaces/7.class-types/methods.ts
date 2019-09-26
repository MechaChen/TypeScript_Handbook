interface ClockInterfaceB {
  currentTime: Date;
  setTime(d: Date): void;
}

class ClockB implements ClockInterfaceB {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}