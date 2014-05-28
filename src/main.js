var agent   = require('./agent');
var process = require('./process'); 

var agent1 = agent.create('Tony', process.models['rule-based']);
var agent2 = agent.create('Candy', process.models['rule-based']);

agent1.activate();
agent2.activate();

agent1.listenTo("unkn*");
agent2.listenTo("unkn*");


