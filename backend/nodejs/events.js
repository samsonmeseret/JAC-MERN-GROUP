const events = require("events");

const sumEvent = new events();

// setting the event
sumEvent.on("sum", (num1, num2) => {
  console.log(num1 + num2);
});

sumEvent.emit("sum", 6, 7);

// for remembering the last DoM concepts
// takeCoverage.addEventLitner("click", ()=>{

// })
