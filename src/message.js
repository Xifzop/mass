/*
 * Definiton of message data structure.
 * Created by Xifzop.
 * May 27, 2014
 */

exports.create = function( from, to, opr, msgs ) {
	return {
		fromAID : from,
		toAId   : to,
		version : '1.0.0',
		opr     : opr,
		payload : msgs
	};
};

exports.util =  {
	strToMsg : function( str ) { 
		return JSON.parse( str );
	},
	msgToStr : function( msg ) { 
		return JSON.stringify( msg );
	}
};

exports.types = {
	
};

