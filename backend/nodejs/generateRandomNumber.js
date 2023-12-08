function generateRandomNumber() {
  return Math.round(Math.random() * 10); //1-9
}
// export function generateRandomNumber() {
//   return Math.round(Math.random() * 10); //1-9
// }

// named export -- export by the name and import by the name

//default export --- export by name and import anyname

// named export
module.exports = { generateRandomNumber };
// console.log(module);

//default export
// module.exports = generateRandomNumber;

//ES6
// export default generateRandomNumber;
// export =  {generateRandomNumber}
// export generateRandomNumber;
