// code one
// code two
// time function --- off load to an other thread(thread pool)
// code three

// main single (Event loop) i/o req, res (network)
// matimatical == not best

// jave --- muiltitread (200)// 201

// console.log("my first node program");

// nodejs global
let variable;
var variable1;
const variable2 = "";

// let randomNumber = generateRandomNumber();
// console.log(randomNumber);

// named
const { generateRandomNumber } = require("./generateRandomNumber");

//default
// const Samson = require("./generateRandomNumber");
// ES^6
// import Samson from "./generateRandomNumber.mjs";
// import { generateRandomNumber } from "./generateRandomNumber.js";
// console.log(Samson);
function luckyNumber(name) {
  let number = generateRandomNumber();
  return `${name}, your lucky number is ${number}`;
}

const myNumber = luckyNumber("Samson");
console.log(myNumber);

// console.log(__dirname);
// console.log(__filename);

// console.log(module);
// console.log(process);

// setInterval(() => {
//   console.log("i am time interval");
// }, 1000);

// setTimeout(() => {
//   console.log("i am coming after 5sec");
// }, 5000);
