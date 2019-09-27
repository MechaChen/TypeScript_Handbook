class Animal2 {
  move(distanceInMeters: number) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog2 extends Animal2 {
  bark() {
    console.log('Woof! Woof!');
  }
}

let dog2 = new Dog2();
dog2.bark();
dog2.move(10);
dog2.bark();