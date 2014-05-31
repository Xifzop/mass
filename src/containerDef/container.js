/*
 * Definition for container in mass.
 * Created by Xifzop.
 * May 27, 2014
 */

var loader = require( "./loader" );
var agent   = require('../agentDef/agent');
var process = require('../agentDef/process'); 

function Container( rolePath, configPath ) {
	var roles  = loader.loadRoles( rolePath );
	var config = loader.loadConfig( configPath );
	this._name = "C" + ( new Date().getTime() );
	this._agents = { };
	// initialize agents.
	for( var id in roles ) {
		var count  = roles[id].count  ||  1 ;
		var states = roles[id].states || { }; 
		for( var i = 1; i <= count; ++i ) {
			var Aname = id + ':' + i;
			var ag = agent.create( Aname, process.models[roles[id].model], this._name );
			ag._states = states;
			this._agents[Aname] = ag; 
		}
	}

	// activate each agent.
	for( var aid in this._agents ) {
		this._agents[aid].activate( config );
	}

};

exports.create = function( rpath, cpath ) {
	return new Container( rpath, cpath );
};
// demo
new Container( "../roles", "./container.conf" );

