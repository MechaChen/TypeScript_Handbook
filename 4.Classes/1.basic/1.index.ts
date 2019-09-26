class Greeter {
  // property
  greeting: string;
  // constructor
  constructor(message: string) {
    this.greeting = message;
  }
  // method
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('world');