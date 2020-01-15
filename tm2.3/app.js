const express = require('express');
const app = express();
const message = require('./message.js');
//let all_letters ='';


// app.get("/", function(request, response){   //request en response object
//     for(let i=0; i<= message["letters"].length -1;i++){
//         all_letters +=message["letters"][i] + "<br/>";
//     }
//     //response.send("<h1 style='text-align:center'>Hoi Frans van Wegen!</h1>");
//     response.send(all_letters)
// })
app.get("/", function(req, res){   //request en response object
    res.send("hello world")
})

app.get("/users/:name", function(req, res){   
    res.send(req["params"]["name"]);
})

app.listen(3000, function(error){
    if(error == false){
        console.log("error")
    }else{
        console.log("listening on localhost:3000")
    }

})