const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
//const url = 'mongodb://10.2.111.66:27017/Tutorials';
const url = 'mongodb://10.2.111.66:27017';



mongoClient.connect(url, function(error, client){
	if(!error){
		console.log("db_connected");
		var db = client.db('Tutorials');
		db.collection('animals').find({}).toArray(function (findErr, results) {
			if (findErr) throw findErr;
			console.log(JSON.stringify(results[0]));
			//console.log('A '+result.name+' has a weight of: '+result.weigth);
		})
	}else{
		console.log(error);
	}
	db.collection('animals').insertOne({
		name: 'dog', 
		weigth: '10'
	});
	client.close();
	
})
		

		//	db.collection('animals').insertOne({name: 'cat', weigth: '5'});
		
		//db.collection('animals').find({}), function (findErr,results){
		//	console.log(results);
		//}
			//db.collection('animals').insertOne({name: 'dog', weigth: String(result.weigth)});
			
		//db.find({}).toArray(function(err, results){
		//	console.log(JSON.stringify(results));
		//})
		
	


