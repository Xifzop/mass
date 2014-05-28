exports.behaviors = {
	// for receiving messages
	reply           : function( to, from, msgs ) { },
	replyAll		: function( from, msgs ) { },
	query     		: function( to, from, msgs ) { },
	request   		: function( to, from, msgs ) { },
	inform    		: function( to, from, msgs ) { },
	subscribe 		: function( to, from, msgs ) { },
	callForPropose 	: function( to, from, msgs ) { },
	agree			: function( to, from, msgs ) { },
	failure         : function( to, from, msgs ) { },
	refuse          : function( to, from, msgs ) { },
	propose        	: function( to, from, msgs ) { },
	nonUnderstood 	: function( to, from, msgs ) { } 
};