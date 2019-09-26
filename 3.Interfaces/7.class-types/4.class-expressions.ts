interface ClockConstructor {
  new (hour: number, minute: number);
}

interface ClockInterfaceD {
  tick(): void;
}

const ClockD: ClockConstructor = class Clock implements ClockInterfaceD {
  constrcutor(h: number, m: number){};
  tick() {
    console.log('beep beep');
  };
};