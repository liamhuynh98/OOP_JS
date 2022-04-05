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
