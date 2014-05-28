var util = require( '../util' );
var fs   = require( 'fs' );
var path = require( 'path' );

exports.loadAgentDef = function( fpath ) {
	var agentDefs = {};
	var ext       = '.agent';
	util.forEachFile( fpath, function( fname ) {
		var aName = path.basename( fname, ext );
		// fs.readFileSync( fname, 'utf8', function(err, content) { 
		// 	if( err ) { throw err; } else { agentDefs[key] = content; } 
		// 	console.log(agentDefs);
		// } );
		agentDefs[aName] = JSON.parse( fs.readFileSync( fname, 'utf8' ) );
	} );
};