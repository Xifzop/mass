var fs=require( 'fs' );  
var path = require( 'path' );  

exports.forEachFile = function( ff, handle ) {  
    var files = fs.readdirSync( ff );  
    for(fn in files) {  
        var fname = ff + path.sep + files[fn];  
        var stat = fs.lstatSync( fname );  
        if(stat.isDirectory() == true) {  
            forEachFile( fname );  
        } else {  
            handle( fname );  
        }  
    }  
}; 