const {server} = require("./server");
const {addNumber} = require("./sum");

server();

const result = addNumber(4, 5);

console.log(result);
