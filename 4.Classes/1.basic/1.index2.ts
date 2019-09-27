class Greeter2 {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello ' + this.greeting;
  }
}

let greeter2 = new Greeter2('World');