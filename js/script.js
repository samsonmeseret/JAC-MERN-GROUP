// alert("JavaScript Connected")

// console.log("first")

// Variable
// var, let and const

// Decler

// note: you can re-decler and re-assign it
var someVar;
var someVar = "some Var";
// console.log(someVar)

// someVar = "new Value"
// console.log(someVar)
// Decler and assign(to a value)
// var anyName = "MERN Group"
// console.log(anyName)

// you can't re-decler but you can re-assign
let car = "BMW";
car = "TESLA";

// console.log(car)

// both you can't
const phone = "iphone";
// phone = "SUMSUNG"

// console.log(phone)

var one, two, three;

one = 1;
two = 2;
three = 3;

// console.log(one, two, three)

// DataType

// soem
// 56
// false

// 1. Number

// let num = -34.0223
// console.log(typeof num)
//  2. String

let str = "example 56 dsgfui";
// console.log(typeof str)

// 3. Boolean (true || false)

const todayIsFriday = true; // camel case
// camel: someVar
// pascal: SameVar
// snake: same_var

// console.log(typeof todayIsFriday)

let nulish = null; // javascript bug (mistake)

// console.log(typeof nulish)

var nothing = undefined;

// console.log(typeof nothing)

// Non-primitive data structure:

// Array

// ---------
// ---------

let arr = ["some", 56, false];
// console.log(arr[1])

// Object

let obj = {
  firstName: "Mickle",
};

// console.log( obj["firstName"])
// console.log( obj.firstName)

// OPERATORS
let myNumber = 3;
// postfix increment
// myNumber ++

// let y = myNumber++
let y = myNumber--;

// console.log(myNumber)
// console.log(y)

// prefix increment
// ++ myNumber
// myNumber = myNumber + 1
// console.log(myNumber)

// Concatenation (+)

// 1, arthimatic
// 2. concatenation

// let num2 = "saom"
// let strg = "Gebeyew"

// let totalSum = strg + num2

// console.log(totalSum)
let varOne = "34"; //---> NAN
// console.log(typeof varOne)
const varTwo = 34;

// week typing (js future)
// == : only checks the value
// === : checks the type and the value

// console.log(varOne != varTwo)
// console.log(varOne !== varTwo)
// console.log(varOne === varTwo)
// console.log(varOne == varTwo)

// console.log(2<2)

// AND OPERATOR
// console.log( (3>2) && (4<3) )
//  //            T       F
// console.log( (3<2) && (4<3) )
//  //            F       F
// console.log( (3<2) && (4>3) )
//  //            F       T
// console.log( (3>2) && (4>3) )
//  //            T       T

// OR OPERATOR
// console.log( (3>2) || (4<3) )
//  //            T       F
// console.log( (3<2) || (4<3) )
//  //            F       F
// console.log( (3<2) || (4>3) )
//  //            F       T
// console.log( (3>2) || (4>3) )
//  //            T       T

// NOT OPERATOR

// console.log(! (1>2))

// samson
// samuel

// console.log("C" < "BZ")

// console.log("a".charCodeAt(0))
// console.log(45 < 61)

// console.log(2 < "12")
// console.log(2 == 2.0)

// console.log(2 < "John");

// FUNCTIONS

let num = 30;
let num2 = 30;

//Function declration
// any function have something to return
// function adder (){
//         // console.log(num + num2)
//         return num + num2
//         console.log("first")
// }

// // Invoke || Call
// console.log(adder())
// adder()

// ---- PArameter and Argument

function adder(a, b) {
  //internally how functions declare variable by the name of parameters
  // var a;
  // var b;

  console.log(a);
  console.log(b);
  // return a + b
}

//arguments
// adder(3)
// console.log(adder(5))

// argument > parameter: reject
//parameter > argument : for the unspecified param "undefined "will the value

// var someOne;
// console.log(someOne);

// without regular parameter declration

// function someCase(...some){
//     console.log(some[0])
// }

// someCase(4,5,6,7,8)

// function rareCase() {
//     console.log(arguments[0])
// }

// rareCase(4,5,6,7)

// Function Declration  ways

// traditional
// function declaration
function name(params) {}
//function expression
// let tradFunExp = function (){  // annonamus functions
// console.log("test")
// }
// tradFunExp()

// ES6 (2016) --> Arrow Function

//function expression
// let arrowFunction = (x, y) => {
//     console.log(x + y);
// }
//one line return on arrow functions
// let arrowFunction = (x, y) => console.log(x + y);

// arrowFunction(5, 5)

// CONDITIONS

// IF ELSE CONDITIONS
// function paly(isFreeTime) {

//     if(isFreeTime){
//         console.log("i will play")
//     }else{
//         console.log("i will work || study ")
//     }

// }

// paly(3>2)

// function gradeLetter(grade) {
//     if(grade>90){
//         console.log("grade: A")
//     }else if(grade>80){
//         console.log("grade: B")
//     }else if(grade> 70){
//         console.log("grade: B-")
//     }else{
//         console.log("grade: C")
//     }
// }

// gradeLetter(50)

// SWITCH

// function play (isFreeTime=true){

//     switch (isFreeTime) {
//         case true:
//             console.log("i will play")
//             break;
//         case false:
//             console.log("i will study")
//             break
//         default:
//             console.log("i don't know")
//             break;
//     }

// }

// play("zimbiye")

// function textBased(text) {
//     switch (text) {
//         case "hi":
//             console.log("Hello there")
//             break;
//         case "bye":
//             console.log("have a good day/night")
//             break
//         default:
//             break;
//     }

// }

// textBased("bye")

// MOdern OPerators

// Ternary Operator

// function paly(isFreeTime) {

//     return isFreeTime? console.log("i will play") : console.log("i will study")

// }

// console.log(paly(false))

// False || True

// function today(isMonday) {

//     isMonday && console.log("today is monday, my worest day !")

// }

// today(false)

// Loops

// 1) for loop
// 2) while loop

// for loop

// console.log("my task");
// console.log("my task");
// console.log("my task");
// console.log("my task");
// console.log("my task");
// i = i + 1

// let string = "MERN";

// let array = ["abebe", "kebede", "chala", "anyone"];

// let numArray = [3, 5, 7, 4, 1, 8];

// // console.log(string[1]);

// for (let i = 0; i < numArray.length; i++) {
//   //   console.log(numArray[i] * 2);
//   if (numArray[i] % 2 == 0) {
//     // break;
//     continue;
//     console.log(numArray[i]);
//   } else {
//     console.log(numArray[i]);
//   }
//   //   continue;
//   //   break;
// }

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// while loop

// let j = 0;

// let something = true;
// // game

// // level 1 = true

// while (j <= 5) {
//   //   console.log(j);
//   //   j++;
// }

// let obj ={
//   name: "Samson",
//   id: 4243,
//   major:"Economics"
// }

function Student(id, name, major) {
  this.id = id;
  this.name = name;
  this.major = major;
}

Student.prototype.learn = function learn() {
  return `${this.name} is Learning ...`;
};

const Sami = new Student(4145, "Samson", "Economics");

// console.log(Sami.name, Sami.id, Sami.major);
// console.log(Sami.learn());
// console.log(Sami.learn());

class Teacher {
  constructor(id, name, salary, major) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.major = major;
  }
  teach() {
    return `${this.name} is Teaching ...`;
  }
}

// Teacher.prototype.teach = function () {
//   return `${this.name} is Teaching ...`;
// };

let Abebe = new Teacher(4345, "Abebe", 20000, "Ecomics");
// console.log(Abebe);

// let Str = "mern";
// console.log(Str.toUpperCase());
// let Numb = 34.6;

// console.log(Number.isInteger(Numb));

// console.log(Array.prototype);
// console.log(String.prototype);
// console.log(Number.prototype);

// DataType Object
// String
// Array
// Number

// Other Object
// Date
// Maths

// console.dir(String);

// let ethiopia = "Ethiopia";

// console.log(typeof ethiopia);
// console.log(ethiopia.length);
// console.log(ethiopia.toUpperCase());

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//     <!-- <script defer  src="./js/script.js"></script> -->
//     <!-- <script async src="./js/script.js"></script> -->
//     <!-- <link rel="stylesheet" href="style.css" /> -->
//     <title>JavaScript Practice</title>
//   </head>
//   <body>
//     <section>
//       <h1 style="color: blueviolet">Example</h1>
//     </section>
//     <script src="./js/script.js"></script>
//   </body>
// </html>

// DOM - javascript programming language
// let object = {
//   html: {
//     head: {
//       meta: {},
//     },
//     body: {
//       section: {
//         h1: {},
//       },
//       script: {},
//     },
//   },
// };

// DOM Manipulation

// DOM element selecting
//single
// console.log(document);
let firstDiv = document.getElementById("first");
// console.log(firstDiv); HTML Element

let secondDiv = document.querySelector(".first__div");
// console.log(secondDiv);

//multiple

let allDiv = document.querySelectorAll("div");
console.log(allDiv); // NodeList

let allLists = document.getElementsByTagName("li");
// console.log(allLists); //HTML Collections

let allLinks = document.getElementsByClassName("lists");
console.log(allLinks); //HTML Collection

// traversing

let ulZParent = document.getElementById("ul");
console.log(ulZParent.lastElementChild);

let firstLi = document.querySelector(".one");
console.log(firstLi.nextElementSibling);
