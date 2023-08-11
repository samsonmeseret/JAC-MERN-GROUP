// alert("JavaScript Connected")

// console.log("first")

// Variable
// var, let and const 

// Decler

// note: you can re-decler and re-assign it
var someVar;
var someVar = "some Var"
// someVar = "other value"
// console.log(someVar)


// someVar = "new Value"
// console.log(someVar)
// Decler and assign(to a value)
// var anyName = "MERN Group"
// console.log(anyName)

// you can't re-decler but you can re-assign
let car = "BMW"
car = "TESLA"

// console.log(car)

// both you can't
const phone = "iphone"
// phone = "SUMSUNG"

// console.log(phone)


var one, two, three;

one=1
two=2
three=3

// console.log(one, two, three)



// DataType

// soem
// 56
// false

// 1. Number

let num = -34.0223
// console.log(typeof num)
//  2. String

let str = "example 56 dsgfui"
// console.log(typeof str)

// 3. Boolean (true || false)

const todayIsFriday = true // camel case 
// camel: someVar
// pascal: SameVar
// snake: same_var

// console.log(typeof todayIsFriday)

let nulish = null // javascript bug (mistake)

// console.log(typeof nulish)

var nothing = undefined



// console.log(typeof nothing)

// Non-primitive data structure:

// Array

// ---------
// ---------

let arr = ["some", 56, false]
// console.log(arr[1])

// Object

let obj = {
    firstName: "Mickle"
}


// console.log( obj["firstName"])
// console.log( obj.firstName)



// OPERATORS


// OPERATORS
let myNumber = 3
// postfix increment
// myNumber ++

// let y = myNumber++
let y = myNumber --

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
let  varOne = "34"  //---> NAN
// console.log(typeof varOne)
const varTwo = 34 

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

// let num = 30
// let num2 = 30

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

    console.log(a)
    console.log(b)
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
function name(params) {
    
}
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



