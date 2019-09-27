class Animal1 {
  move(distanceInMeters: number) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog1 extends Animal1{
  bark() {
    console.log('Woof! Woof!');
  }
}

let dog1 = new Dog1();
dog1.bark();
dog1.move(10);
dog1.bark();