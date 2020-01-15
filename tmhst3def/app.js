const http = require('http');
const fs = require('file-system');

// let movieA = fs.readFileSync("./movieA.txt", "utf8");
// fs.writeFileSync("./movieA.txt", movieA + "I love movie A", "utf8");
try{
    fs.rename('./movieA.txt', 'movieZ.txt'); //rename
} catch(err){
    if(err) {
        console.log("could not find that file")
    }
}
fs.unlink('./movieZ.txt')   //remove
