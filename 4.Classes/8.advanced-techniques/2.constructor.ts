let GreeterB = (function() {
  function Greeter(message) {
    this.greeting = message;
  }

  Greeter.prototype.greet = function() {
    return 'Hello, ' + this.greeting;
  }

  return Greeter;
})();


let greeterB;
greeterB = new GreeterB('world');
console.log(greeterB.greet());