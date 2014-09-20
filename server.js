var nools = require ('nools');
var ruleFilePath = __dirname + "/rules/helloworld.nools";
var flow = nools.compile (ruleFilePath);
var session = flow.getSession ();

var Message = flow.getDefined ("message");

console.log ("Rules executed @ " + ruleFilePath);

session.assert (new Message ("hello"));
session.assert (new Message ("hello or goodbye"));
session.assert (new Message ("hello world"));
session.assert (new Message ("goodbye"));

console.log (session.getFacts ());

session.match (function (err) {
  if (err) {
    console.error (err.stack);
  } else {
    console.log ("All done finding rules matches!");
  }
})

session.getFacts (Number); //[1, 2];
session.getFacts (String); //["A", "B"];