var util = require( '../util' );
var fs   = require( 'fs' );
var path = require( 'path' );

exports.loadRoles = function( fpath ) {
	var agentDefs = {};
	var ext       = '.role';
	util.forEachFile( fpath, function( fname ) {
		var aName = path.basename( fname, ext );
		// fs.readFileSync( fname, 'utf8', function(err, content) { 
		// 	if( err ) { throw err; } else { agentDefs[key] = content; } 
		// 	console.log(agentDefs);
		// } );
		agentDefs[aName] = JSON.parse( fs.readFileSync( fname, 'utf8' ) );
	} );
	return agentDefs;
};

exports.loadConfig = function( cpath ) {
	return JSON.parse( fs.readFileSync(cpath, 'utf8') );
};