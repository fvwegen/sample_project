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
			console.log(JSON.stringify(results[1]));
			//console.log('A '+result.name+' has a weight of: '+result.weigth);
		})
	}else{
		console.log(error);
	}
	// db.collection('animals').insertOne({
	// 	'name': 'bear', 
	// 	'weigth': '100'
	// });
	
	// db.collection('animals').updateOne(
	// 	{'name': 'bear'},
	// 	{$set:{'weigth': '10000'}}
	// );

	
	db.collection('animals').updateMany(
		{'name': 'bear'}, {$set:{'weigth': '1000'}}, function(err, result) {
		console.log(JSON.stringify(result))
		}
	)
	
	// db.collection('animals').deleteOne(
	//  	{name: 'dog'},
	// // 	{justOne:true}  //de eerste die hij vindt, false: dan worden allen gedelete
	//  );
	 
// 	 db.collection('animals').deleteMany(
// 		{'name': 'bear'},
//    // 	{justOne:true}  //de eerste die hij vindt, false: dan worden allen gedelete
// 	);

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
		
	


