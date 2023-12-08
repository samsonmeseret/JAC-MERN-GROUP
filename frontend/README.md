<div>

<img src="./javascript.jpg"/>
</div>

# Contents

- Part One

### 1. Introduction to programming using JavaScript

### 2. JavaScript

### 3. Core JavaScript Concepts

    - variables
    - DataTypes
    - Operators(Assignment, Arthimetic, String, Comparison, Logical Operator)
    - functions
    - conditional statements
    - loops
    - OOP

- Part Two

### 4. DOM Manipulation

### 5. JavaScript DOM Events

### Introduction to programming

```
1. Programming language (definition): It is a language with set of rules to instruct a
computer or computing device to perform specific tasks.

```

```
How is programming language used to instruct computers? It is with the use of
machine language that we can instruct a computer to do tasks. Machine language gives
instructions as 0’s and 1’s.

Machine language (machine code): One thing you must understand is, computers
operate in binary, meaning they store data and perform calculations using only
zeros and ones. Machine language is a collection of binary digits or bits that the
computer reads and interprets. Machine language is the only language a computer
is capable of understanding


How can you represent the number 57 using the binary concept of letting
electricity pass or not pass?
• First, convert this number which uses the decimal system (with digits from
0 to 10) into binary (with 0 and 1 digits).
o 57 in binary is: 111001

```

<a href="https://www.youtube.com/watch?v=gs4Sb4ar4qw&ab_channel=CS50"><img width="50px" src="image-1.png"/>CS50 Instructor on Binary concept</a>

### JavaScript

JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser.

<div style="display:flex; align-items:center; gap:20px">

<img src="./brenden.jpeg" width="100px"/>

<a href="https://brendaneich.com">Portfolio</a>

</div>

```

JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior,

```

### Core JavaScript

- Variables

```
* Variable is a container for storing data (values). It is a place where a script
temporarily saves data for later use.
o The name variable is used because the value in a variable can vary or be changed
when the script run

```

```
var is the JavaScript keyword we use to declare a variable
▪ Note!!! There are newer ways of declaring variables introduced in 2016
(ES6) using “let” and “const”. We will discuss the difference between var,
const and let when we discuss scoping later on.

```

• Rules for naming variables:

```
▪ Variable names can begin with a letter, $ sign or “_” (underscore)
▪ Variable names cannot start with a number
▪ Variable names can contain letters, digits, underscores, and dollar signs.
▪ Variable names are case sensitive (y and Y are different variables)
▪ Variable names should not include hyphen (-), space
▪ Reserved words (like JavaScript keywords) cannot be used as variable names.
Refer this link to find the list of reserved key words
https://www.w3schools.com/js/js_reserved.asp
▪ If the variable name uses multiple words, it is a conventi


```

- DataTypes

```
It is a particular way of storing, organizing and processing
data/information in a computer so that it can be retrieved and used most productively.
▪ The concept of data types is important in programming. That is why learning
programing language starts by understanding what data is and how it is structured
for effective use. To be able to operate on variables, it is important to know
something about the data type.


• Data structure types: There are two types of data structure available for the programming
purpose, primitive data structure and non-primitive data structure.

```

**Primitive data structure (data types) in JavaScript:**

- Number : A numeric data type represents any numerical values like integers
- String: Strings are useful for holding data that can be represented in text form.
  Strings are written with quotes. You can use single or double quotes.
- Boolean: stores logical values that are either true or false.
- Undefined: The undefined datatype, whose value is undefined is used to denote
  an absence of a meaningful value. Do you remember when we said the datatype of
  a variable that has no value assigned is 'undefined', that is what we mean by
  undefined data type
- Symbol: was introduced in ECMAScript 2015, so just a few years ago. It's a very
  peculiar data type. Once you create a symbol, its value is kept private and for
  internal use. Symbol can be created using the factory function Symbol () which
  returns a Symbol. Every time you call the factory function, a new and unique
  symbol is created.<a  href="https://playcode.io/javascript/symbols">More</a>
- Null: JavaScript defines that null is an empty object value. Null represents the
  intentional absence of any object value. It is one of JavaScript's primitive values
  and is treated as falsy for Boolean operations.
- BigInt: Bigint value represent integers with arbitrary precision. provides a way to
  represent whole numbers larger than 2^53
  -1. So, it means, with BigInts, you can
  safely store and operate on large integers even beyond the safe integer limit for
  Numbers. <a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt">More</a>

**Non-primitive data structure:**

```
These are structures created by grouping primitive data
together. Non-primitive data structure is a type of data structure that can store the data of
more than one type.

```

- Array: An array stores a collection of items in a manner that the position
  of each element can be calculated or retrieved easily by an index

- Objects: It is a non-primitive data type that consists of unordered key-value pairs. Each object may include any mix of these fundamental data types and reference data types, as objects are more complicated.

- Stack: A stack stores a collection of items in the linear order that
  operations are applied. This structure is named as “stack” because it
  resembles a real-world stack — a stack of plates. A stack works based on the LIFO principle i.e., Last In, First out, meaning that the most recently added element is the first one to remove. <a href="https://www.javascripttutorial.net/javascript-stack/#:~:text=A%20stack%20is%20a%20data,the%20stack%3A%20push%20and%20pop.">More</a>

- Queue: A queue stores a collection of items like a stack; however, the
  operation order can only be first in, first out. This structure is named as
  “queue” because it resembles a real-world queue — people waiting in a
  queue.

- Linked List: A linked list stores a collection of items in a linear/sequential
  order. Hence, you must access data sequentially and random access is not
  possible <a href="https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/">More</a>

### Operators

• Operators and Operands:
o Operands: The numbers (in an arithmetic operation) are called operands
o Operator: Operator defines the operation that will be performed between the two
operands

- Assignment operator ( = ): It is used to assign value or change value of a variable.
  o Example: var x = 10;

- Arithmetic operators ( + ), ( - ), ( \* ), ( / ), (%) (++), (--) : Arithmetic operators perform
  arithmetic on numbers, meaning, they work in a similar way we use them in math.

- String operator (concatenation operator) (+):
  When using the (+) operator with string data type, the strings join or get
  concatenated. The (+) operator lets us add/join the contents of two or more strings
  together to create one larger string

- Comparison operators: Comparison operators are used in logical statements to determine
  equality or difference between variables or values. Comparison operators always return a
  Boolean value of true or false.

```
     • (==) Equals to: This operator measures whether values on either side of the
operator are equal. Here, only values are compared.

```

```
     • (===) identity/strictly equal to with no type conversion: This operator compares
both value and equal type

```

```
      • (! =) Not equal/ Inequality: This operator tests inequality, to determine whether
the values on either side of the operator are not equal. This operator is basically
saying the two values on the left and right are not even loosely equal in value

```

```
      • (! ==) not identity/ Strictly unequal to with no type conversion: This operator
evaluates a strict inequality, which considers both the value and the type of the
operands on either side of the operator. This operator is basically saying the two
values are not equal in value or not equal in data type

```

```
      • (>): Greater than: The greater than symbol in JavaScript may be familiar to you
from math: >.

```

```

      • (>=): Greater than or equal to: This operator is typed as >= a kind of compound
between greater than (>) and the equal sign (=).

```

```
      • (<) Less than: The less than operator appears as the mirror version of the greater
than operator. It evaluates whether one value (on the left side of the expression) is
less than another value (on the right side of the expression). That means, like the
== operator above, the less than operator is not strict, and therefore will allow you
to mix strings and numbers.

```

```
      • (<=) Less than or equal to: The less than or equal operator will evaluate whether
the value on the left side of the operator is less than or equal to the value on the
right side.

```

- Logical operators:

```
Logical AND (&&): This returns true if both operands are true. Meaning, if either
one of the variables were initialized as false, the && expression would evaluate to
false.
• true && true = true
• true && false = false
• false && false = false
• false && true = false
• (1==1 && 2==2 && 3==7) // returns False


```

```
 Logical OR (| |): The OR operator, represented by two pipes, returns true if one
operand is true
• true || true = true
• true || false = true
• false || false = false
• false || true = true
• (1==1 || 3==2 || 3 == 7) // returns True
```

```
Logical not (!): This returns true if operand is false and vice versa.
• ! False = True
• ! True = False
• ! (1==1 || 3==2) // returns False

```

- General Operator rules

```

The following is a list showing operators that have the highest precedence on top:
• Grouping: ()
• Postfix increment: … ++
• Postfix decrement: … --
• Logical not: !
• Comparison: < , >= , = = = , !=
• Logical AND: &&
• Logical OR: | |


```

the above rules helps you to solve the output of code like "1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
"

```
Examples:

A. 24 > 3
B. 2 < "12"
C. 0 == 2
D. 2.0 === 2
E. 2.0 == "2"
F. 2 < "John"
G. 2 > "John"
H. "2" < "2"
I. "2" > "12"
J. 1 == 1 || 3 == 2 || 3 == 7
K. 1 == 1 && 2 == 2 && 3 == 7
L. 1 == 1 || 2 == 2 && 3 == 7



```

- functions

```
You can describe
functions as words (specifically verbs) are for the English or any human
language. Writing a function means we are defining some code/procedures
that we can use later in our program whenever we want to


a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

```

```
▪ Function declaration: Syntax for defining function with declaration
function myFirstFunction (number1, number 2) {

    return number1 + number2;

}


▪ Function expressions: Syntax for defining function with expression
const x = function (number3, number4) {

    return number3 + number4

};

▪ Function expressions: Syntax for defining function with Arrow

const arrowFunctionExample = (number3, number4)=> {

    return number3 + number4

};

```

```
- Parameters and Arguments

JavaScript will create new variables using names of the
parameters
o JavaScript then give these variables initial values using the
argument values you passed when you called the function.
o These variables will be local to the function. They will exist only
inside it (you will not be able to access any of these variables from
the outside)


example:

const myFunction = function (params){

}

myFunction(argument)




```

## Conditional Statements:

Conditional statements are used to perform different actions based on
different conditions. Conditional statements are used to specify if a block of code should be
executed if a specified condition is met/true.

o In JavaScript we have 4 conditional statements: we will discuss all of them in the
following sections of the note
▪ if statements
▪ else statements
▪ else if statements
▪ switch statements

▪ Syntax 1:
if (condition) {
// write the code you want to be executed if the condition is true
}

switch(expression) {
case x:
// the code you want to be executed if expression matches value of the case
break;
case y:
// the code you want to be executed if expression matches value of the case
break;
default:
// the code you want to be executed if expression matches value of the case
}

- Ternary Operator

```
      (condition)? true : false

```

- falsy and Truesy

```
      (condition) && output

```

## Loops

- A loop in programming is defined as a segment of code that executes multiple times. JavaScript loops are used to repeatedly run a block of code until a certain condition is met. If a condition evaluates to true, the loop’s statement (block of code) is executed. The condition will be evaluated again and again, and the code block runs as long as the condition is true. When the condition evaluates to false, the loop stops

• **Loop**: As stated above, loop a block of code that runs multiple times
• **Iteration**: It refers to the process by which a code segment is executed once. One iteration refers to 1-time execution of a loop. A loop can undergo many iterations.

JavaScript supports different kinds of loops. For example, for, for/in, for/of, while, do/while. However, they all essentially do the same thing: they repeat an action some number of times. We will focus on for loop and while loop as they are the most commonly used ones

### ▪ For loop Syntax:

```

      for (initialization; condition; post/final-expression) {

            // statements (code block to be executed)

      }

```

### o While loop Syntax:

```

      while (expression) {

            // statement (code block to be executed)

      }

```

▪ Example:
var f = 0;
while (f < 3) {
console.log(f); // prints the numbers 0 to 2
f++;
}

### For Loop vs While Loop

```
      In for loop, the number of iterations to be done is already known and is used to obtain a certain result. While loop is used when the number of iterations is unknown. In while loop the command runs until a certain condition is reached and the statement is proved to be false.


```

## Introduction to object-oriented programming

```
      ▪ We know that humans understand real word situations like people, places and
things in general as objects. Object oriented data modeling is way by which these
real-world situations are explained/represented as objects to computers.

```

• Components of object-oriented data model: The structure, or building blocks, of objectoriented programming include the following:

      ▪ Objects: objects are thigs obtained from a real-world entity. Objects in
      programming language can correspond to real-world objects or an abstract entity.
      Objects are the things we are trying to explain to the computer.

      ▪ Attribute: describes the properties of an object. Properties are characteristics of
      the thing we are describing. For example, a PERSON object includes the attributes
      Name, Social Security Number, and Date of Birth.

      ▪ Method/function(action): Method represents the behavior of an object. Basically,
      it represents the real-world action. It answers the question “what does the object
      do?”

o Example to describe a Car using the object-oriented data model

▪ Object: Let’s assume we have a “car” object
▪ Properties of the object: model, make, color, doors
▪ Methods/Actions: Car Starts (startCar), Car Accelerates (accelerate), Car
Decelerates (decelerate)

<img src="./class-objects-properties-methods.png"/>

<a href="https://www.freecodecamp.org/news/object-oriented-programming-javascript/#:~:text=Object%2DOriented%20Programming%20is%20a,flexible%20and%20easier%20to%20maintain.">More ON OOP</a>

```
Object-Oriented Programming is a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box.

OOP was developed to make code more flexible and easier to maintain.

JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.



      We have now discussed the basics of OOP. But OOP in JavaScript is bit different. We have an object linked to a prototype. Prototypes contain all methods and these methods are accessible to all objects linked to this prototype. This is called Prototypal Inheritance (or Prototypal Delegation).


That's the basic idea of prototypical OOP in JavaScript! We have special blocks called prototypes that define the abilities and characteristics, and we can create new blocks that inherit those abilities by referencing the prototype.
```

### How to Implement Prototypal Inheritance in JavaScript

There are three main ways to implement Prototypal Inheritance in JavaScript:

- Using Constructor Functions
- Using ES6 Classes
- Using Object.create()

**How to Implement Prototypal Inheritance with Constructor Functions in JavaScript**

We will use a function to create prototypal inheritance. We will start by implementing a User function expression. Remember to always start the name of a constructor function with capital letter (standard convention).

example:

```
      function User(name){
            this.name = name;

            console.log(this);
      }

      User.prototype.printName = function(){
	console.log(this.name)
      }


      let kedar = new User("kedar")


```

```
      console.log(User.__proto__)
      (User instanceof Function);
      me.constructor == User

```

**How to Implement Prototypal Inheritance with ES6 Classes in JavaScript**
We can implement OOP using classes, but behind the scenes it uses prototypal inheritance. This method was introduced to make sense to people coming from other languages like C++ and Java.

We will implement the User classes from the above example:

```
      class User{
                  constructor(name){
                  this.name = name
            }

            printName(){
                  console.log(this.name);
            }
      }

const kedar = new User("kedar")


```

**String prototype, Array Prototypes and Object Prototypes**

## DOM Manipulation

### What is DOM?

We covered the relationship between HTML, CSS and JavaScript when we discussed the
class on Introduction to Programming Basics. We said HTML provides the basic structure
of websites, which is enhanced and modified by other technologies like CSS and
JavaScript. CSS is used to control presentation, formatting, and layout. JavaScript is a
logic-based programming language that can be used to modify website content and make
it behave in different ways in response to a user's actions.

A website is like a special kind of toy box that has lots of different things, like pictures, buttons, and text. The DOM helps you find and interact with these things. It's like a map that shows you where everything is located on the website.

So, when you use the DOM, you can ask it questions like, "Where is the picture of a cat?" or "What happens when I click this button?" And just like finding your favorite toy car, the DOM helps you find and play with the different parts of a website, so you can have fun exploring and using it!

```
✅ DOM is not part of HTML
✅ DOM is not part of JavaScript. However, JavaScript interacts with the created
DOM object
✅ DOM is a language-agnostic structure. Meaning, DOM can interact with various
languages other than JavaScript
```

## The DOM tree:

```
When the browser reads HTML code and encounters an HTML element
like <html>, <body>, <div>, or encounters HTML attribute like “src” and “ref” or texts in
HTML, it converts each one of them into objects. The objects the browser creates from our
HTML document are called a node. After the browser has created node objects from the
HTML document, it will treat the node objects as a tree-like hierarchy.

```

### Type of Nodes

1. The “document node”: Document node is the root of DOM tree.
2. The “element node”: Each HTML tag becomes element node under the DOM
   tree.
3. The "attribute node”: Each attribute of an HTML element becomes element
   node under the DOM tree.
4. The "text node”: Text nodes represents the textual content in an element or an
   attribute.
5. The "comment node”: HTML comments (<!-- comment -->) are represented
   by comment nodes in a DOM tree.

<img src="./dom-tree-example.png">

### DOM Manipulation

```
DOM manipulation refers to the process of changing or modifying the elements of a website using the Document Object Model (DOM).

Imagine you have a coloring book with different pictures. You can use crayons to change the colors of the pictures and add new drawings. Similarly, with DOM manipulation, you can use code to change the content, style, and behavior of a website.

```

**Manipulating DOM involves two steps:**

```
1: Finding/selecting the element we want to work with
2: Altering the text or attributes of that element

```

## Selecting Elements

Selecting in JavaScript can also be divided into three types

```
▪ 1. Select an individual element:
      Example: Finding one specific <div> element
▪ 2. Select multiple elements: Example:
      Finding all <div> elements
▪ 3. Traversing between multiple elements:
      Example: Finding a <p> element within a particular <div>

```

### Individual Element

1. getElementById() method:

2. querySelector() method:

```
document.querySelector(".bye");
```

### Multiple Element

1. querySelectorAll() method:

```
 document.querySelectorAll("li")
  //returns a nodeList of all <li>
```

2. getElementsByTagName() method:

```
o var el = document.getElementsByTagName("li");
o console.log(el.item(0));// returns the 1st li element
o console.log(el[1]); // returns the 2nd li element

```

3. getElementsByClassName():

```
o var el = document.getElementsByClassName("red");
o console.log(el[1]); //selects the 2nd li element with red class
o console.log(el.item(0));// selects the 1st li element with red class
```

### Selecting elements (traversing between multiple elements)

#### Traversing downwards:

1. firstElementChild():

```
console.log(document.getElementById("listOfFruits").firstEleme
ntChild);// prints the first li element under the ul
```

2. lastElementChild():

```
console.log(document.getElementById("fruitId").lastElementChi
ld);// prints the last li element under the ul

```

#### Traversing upwards:

1. parentElement():

```
console.log(document.getElementById("one").parentElement);//
prints the <ul> which is the parent to all the <li>
```

2. closest():

```
console.log(document.getElementById("one").closest(". hello"));
//prints the closest parent or the <ul>.
o Note: The <li>s selected here has the <div> and <ul> as its
parents, but closest allows us choose the closest parent

```

#### Traversing sideways:

1. previousElementSibling:

```
console.log(document.getElementById("three").previousElement
Sibling)//prints the 2nd li
```

2. nextElementSibling:

```
console.log(document.getElementById("two").nextElementSibling); // prints the 3rd li
```

### Return Values

```
NodeList: To refresh your memories, everything in the DOM is a node (contains
element nodes, text nodes, atrribute nodes, etc.) NodeList returns a static NodeList.

HTMLCollection: returns a live
HTMLCollection
```

**NodeList(static collection) vs HTMLCollection (live collection) in example:**
We said HTMLCollection returns a live HTMLCollection. Meaning, if the DOM
changes after you use the method, the HTMLCollection is updated to reflect the
change. We also said NodeList returns a static NodeList. Meaning, even if the
DOM changes after you use the method, the NodeList does not reflect the current
change.

## Manipulation

### Altering values (working with HTML content)

1. createElement() method:
2. appendChild() method:
3. prepend () method:

```
var liElem = document.createElement("li");
var parent = document.getElementById("listOfFruits");
parent.appendChild(liElem);

```

4. innerHTML() method:
5. textContent() method:
6. removeChild() method:
7. innerText() method:

### Altering values (working with HTML attribute)

1. className() method:
2. ClassList() method:
3. setAttribute() method:

### Altering values (working with inline styling)

1. Changing CSS Values with the DOM “style” property

```
var firstLi = document.getElementById("one");
firstLi.style.color = "red"; // changes text color of <li> to red
```

## DOM Events

Events in JavaScript are what happens on the browser when a user browses/manipulates a any website.
Your job as a JavaScript developer is to write a script that responds to an event that happens on the browser.
This is what makes websites interactive.

### event types

**Load event:** The event fires when the browser finishes loading a page
probably because user requested a new page

**resize event:** This event occurs when a user changes/resizes the current size of the browser
window

**scroll event:**

**Click event:**

**mouseover event:** and so on.

## Event handling in HTML
## Ways to bind an event (HTML event handler attributes/inline event handlers)
```
There are three ways to assign/bind event handlers to an event: HTML event handler attributes/inline
event handlers, traditional/DOM Level 0 event handlers and DOM Level 2 event handlers. We will discuss
the HTML event handlers attribute in this section and the other 2 will be discussed in the following sections.

```

```
HTML event handlers attribute: HTML allows event handler attributes, with JavaScript code, to be added to HTML
elements. To handle events using this method, all you need to do is to use an HTML attribute with the name of the
event handler function.


1.  (traditional DOM event handlers/ DOM Level 0 event handlers)
▪ Syntax: onclick="changeBackground()"

function showClickedAlert() {
      alert("button clicked!!");
}

```


```
2. event (DOM level 2 event handlers/listeners)

a. method one
Syntax:
▪ element.addEventListener(event, function)

event : "click","submit" ...

function showClickedAlert() {
      alert("button clicked!!");
}


b. method two

var myButton = document.getElementById("buttonId");
myButton.onclick = function () {
myButton.style.color = "red";
};

```


## Time on some small hands on examples. 
