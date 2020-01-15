
const http = require('http');
const fs = require("file-system"); 

// if you're importing a third-party module 'foo' that doesn't provide any typings, 
// either in the library itself, or in the @types/foo package (generated from the DefinitelyTyped repository), 
// then you can make this error go away by declaring the module in a file with a .d.ts extension:

// // foo.d.ts
// declare module 'foo';
// foutmelding bij require("file-system") is hiermee verdwenen


http.createServer(function(req,res){     //objecten request en response
	try{
		let file = fs.readFileSync('.'+req['url'] + '.txt','utf8'); 
		//asynchroon je hoeft niet te wachten  
		//. geeft aan dat het een pad betreft
		//probeert bestand te vindne met extentie .txt
		//res.write(req['url']+'\n')
		res.write(file);
	}catch(err){
		if(err){
			res.write("404 file not found");
		}
	}

	res.end();
}).listen(3000);
