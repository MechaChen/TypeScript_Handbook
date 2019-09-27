class Greeter5 {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello ' + this.greeting;
  }
}

let greeter5 = new Greeter5('World');