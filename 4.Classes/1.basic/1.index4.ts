class Greeter4 {
  greeting: string;

  constructor(message: string) {
    this.greeting  = message;
  }

  greet() {
    return 'Hello ' + this.greeting;
  }
}

let greeter4 = new Greeter4('World');