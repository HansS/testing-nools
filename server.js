var nools = require ('nools');
var ruleFilePath = __dirname + "/rules/helloworld.nools";
var flow = nools.compile (ruleFilePath);
var session = flow.getSession ();

var Message = flow.getDefined ("message");

session.assert (new Message ("hello"));
session.assert (new Message ("hello or goodbye"));
session.assert (new Message ("hello world"));
session.assert (new Message ("goodbye"));

session.match();
