var fs=require( 'fs' );  
var path = require( 'path' );  

function forEachFile( ff, handle )  
{  
    var files = fs.readdirSync( ff );  
    for(fn in files)  
    {  
        var fname = ff + path.sep + files[fn];  
        var stat = fs.lstatSync( fname );  
        if(stat.isDirectory() == true)  
        {  
            forEachFile( fname );  
        }  
        else  
        {  
            handle( fname );  
        }  
    }  
}  
forEachFile('./agents', function(fname) {
	console.log( fname );
} );  
