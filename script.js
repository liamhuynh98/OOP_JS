'use strict';

//constructor function naming start with a capital letter
//creating a person
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const liam = new Person('Liam', 1998);
const kevin = new Person('Kevin', 2000);
console.log(liam, kevin);

//prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

liam.calcAge();
kevin.calcAge();

console.log(liam.__proto__);
console.log(kevin.__proto__);

console.log(Person.prototype.isPrototypeOf(liam));
console.log(Person.prototype.isPrototypeOf(kevin));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObject
Person.prototype.species = 'Straight';
console.log(liam.species);

//checking for properties of the object
console.log(liam.hasOwnProperty('firstName'));
console.log(liam.hasOwnProperty('species'));

//Prototypal inheritance on built-in Objects
console.dir(Person.prototype.constructor);
const arr = [3, 6, 4, 6, 7, 2, 3, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique);
const h1 = document.querySelector('h1');

//Coding Challenge 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bwm = new Car('BWM', 120);
const mercedes = new Car('Mercedes', 95);

bwm.accelerate();
bwm.accelerate();
bwm.brake();

//ES6 Classes
//classes expression
//const PersonCl = class {}

//class declaration

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.__proto__);
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
