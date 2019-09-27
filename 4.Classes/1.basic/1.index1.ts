class Greeter1 {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello ' + this.greeting;
  }
}

let greeter1 = new Greeter1('World');