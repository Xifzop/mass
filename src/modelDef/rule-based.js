

exports.behaviors = {
	// for receiving messages
	reply           : function( to, from, msgs ) { },
	replyAll		: function( from, msgs ) { },
	nonUnderstood 	: function( to, from, msgs ) { },
	failure         : function( to, from, msgs ) { },
	refuse          : function( to, from, msgs ) { },

	// for forwarding messages
	query     		: function( to, from, msgs ) { },
	request   		: function( to, from, msgs ) { },
	inform    		: function( to, from, msgs ) { },
	subscribe 		: function( to, from, msgs ) { },
	callForPropose 	: function( to, from, msgs ) { },
	agree			: function( to, from, msgs ) { },
	propose        	: function( to, from, msgs ) { },
	
};

exports.exec = function( from, payload ) {
	var util = require( "../agentDef/message" ).util;
	var message = util.strToMsg( payload );
	console.log(message);
	// what to do?
	
};


