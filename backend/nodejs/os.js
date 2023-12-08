const os = require("os");

let totalMem = os.totalmem();
// console.log(totalMem);

let freeMem = os.freemem();
console.log(freeMem);

console.log(os.hostname());
console.log(os.platform());

console.log(os.uptime());
console.log(os.userInfo());
