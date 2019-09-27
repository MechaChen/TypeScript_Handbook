class Greeter3 {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello ' + this.greeting;
  }
}

let greeter3 = new Greeter3('World');