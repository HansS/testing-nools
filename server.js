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

/* NOTE: This returns facts in a correlative way. Such as:
 *
 * goodbye
 * hello world goodbye
 * hello or goodbye
 * hello goodbye
 */
console.log (session.getFacts ());

session.match (function (err) {
  if (err) {
    console.error (err.stack);
  } else {
    console.log ("All done finding rules matches!");
  }
})

session.getFacts (Number);
session.getFacts (String);