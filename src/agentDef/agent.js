/*
 *	Definition of single Agent, AgentTemplate, AgentTemplateFactory.
 *	Created by Xifzop.
 *	May 27, 2014
 */
var redis    = require( 'redis' );
var message  = require( './message' ); 
var behavior = require( './behavior' ); 
/*
 * Definition of single agent structure.
 */
function Agent( Aname, process ) {
	this._Aname     = Aname;
	this._ID        = 'unknown/' + this._Aname;
	this._states    = { };
	this._behaviors = behavior.behaviors;
	this._evHandler = { };
	this._ears      = null;
	this._mouth     = null;
	this._process   = process;
};

function alertMsg ( fromID, msg ) {
	console.log("Msg coming from: " + fromID + " | content[ " + msg + "].");
}

// 'Activate' an agent by publish its on channel
Agent.prototype.activate = function( config ) {
	var host    = config? config[ 'host' ] : '127.0.0.1';
	var port    = config? config[ 'port' ] : '6379';
	var self    = this;
	var process = this._process;
	
	this._ears  = redis.createClient( port, host );
	this._mouth = redis.createClient( port, host );
	
	this._ears.on( "pmessage", function( pattern, fromAID, msg ) {
			alertMsg( fromAID, msg );
			//process.call(self, fromID, msg);
			self._mouth.publish( self._ID, 'Agent!' );
		} );
	this._mouth.publish( this._ID, 'Channel published @ ' + host + ':' + port );

};

// 'Trigger' any possible event ang deal with it 
Agent.prototype.trigger = function ( opr, from, msgs ) {
	var handleFn = this._evHandler[opr];
	if( typeof handleFn === 'function' ) {
		handleFn( this, fromAID, msgs );
	} else ; // do nothing with unkonw operation type
};

// Register interested msgType 
Agent.prototype.on = function( opr, callback ) {
	this._evHandler[opr] = callback;
};

Agent.prototype.listenTo = function( pattern ) {
	if( this._ears ) {
		this._ears.psubscribe( pattern );
	} else ; // do nothing if the input of agent is not initialize
};

Agent.prototype.unlistenTo = function( aid ) {
	if( this._ears ) {
		this._ears.unsubscribe( aid );
	} else ; // do nothing if the input of agent is not initialize
};

exports.create = function( Aname, process ) {
					return new Agent(Aname, process);
				};
