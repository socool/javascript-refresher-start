// CH17 1. normal import
// import {apiKey} from './util.js';

// CH17 2. default import
// import apiKey from './util.js';

// CH17 3. import multiple variable and default variable
// import {abc as bbb,apiKey} from './util.js'
// import anyName from './util.js'

// console.log(apiKey,":",bbb,"default var:",anyName);

// CH17 4. import *
import * as util from "./util.js";

console.log(util.default, ":", util.abc, ":", util.apiKey);

// CH18 revisting varibale & values
// use let can change value
let userMessage = "Hello world";
userMessage = "Goodbye world";

const customerMessage = "Hi there";
//customerMessage = "Bye there"; // found type error is read-only

// CH19 revisiting operators
console.log("hello" + "world");
console.log(10 > 5);
if (10 === 10) {
  console.log("10 is equal to 10");
}

// CH20 revisiting functions & parameters
function greet(userName, message) {
  return `Hello! ${userName} ${message}`;
}
const greet1 = greet("John", "How are you?");
console.log(greet1);

// exercise: working with functions
function combine(a, b, c) {
  return (a * b) / c;
}

// CH21 arrow function
//export default function(){
export default (userName, message) => {
  return `Hello! ${userName} ${message}`;
};

// CH 23 revisiting objects & classes
const user = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello! ${this.name}`);
    console.log(this.age);
  },
};
console.log(user.name, user.age);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello! ${this.name}`);
  }
}

const user1 = new User("John", 30);
console.log(user1.name, user1.age);
user1.greet();

// CH24 revisiting arrays & array method like map()
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Music");
console.log(hobbies);

const index = hobbies.findIndex((hobby) => {
  return hobby === "Cooking";
});
console.log(index);

const editedHobbies = hobbies.map((hobby) => {
  return hobby + "!";
});
console.log(editedHobbies);

const editedHobbies2 = hobbies.map((hobby) => ({ text: hobby }));
console.log(editedHobbies2);

//code excercise 2: excercise array method
function transformToObjects(numberArray) {
  return numberArray.map((number) => {
    return { val: number };
  });
}

console.log(transformToObjects([1, 2, 3]));

const [person1, person2, person3] = ["John", "Bob", "Alice"];

const { name: userName, age } = {
  name: "Max",
  age: 34,
};

console.log(userName, age);
