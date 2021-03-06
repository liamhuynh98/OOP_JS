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

  //getter
  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes('')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.__proto__);
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

//Setters and Setters
const account = {
  owner: 'Liam',
  movements: [300, 220, 111, 888],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(accoun.movements);

//static methods
//Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.birthYear = 2002;
steven.calcAge();

//coding challenge
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} mi/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at this ${this.speed} mi/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

//Inheritance between "classes": constructor functions
const PersonCl = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.prototype);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//challenge #2
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
  console.log(`${this.make} is goingf at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//link the prototype of Cars to EV

EV.prototype = Create.Object(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

//inheritance between classes in ES6
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduces() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old but as a student I feel like ${
        2037 - this.birthYear + 10
      } years old`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2000, 'Computer Science');
martha.introduces();
martha.calcAge();

//ES6 Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(PersonProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

//Another example of classes
class Account {
  //public field
  locale = navigator.language;

  //private field
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposite(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposite(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposite(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Liam', 'USD', 1111);
acc1.deposite(250);
acc1.withdraw(150);
console.log(acc1);
console.log(getMovements());
