var nools = require('nools');
var ruleFilePath = __dirname + "/helloworld.nools";
var flow = nools.compile();
var Message = flow.getDefined("message");

console.log("Rules executed @ " + ruleFilePath);
console.log(Message);
