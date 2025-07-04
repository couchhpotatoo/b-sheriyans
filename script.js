
// fs
/*const fs=require('fs');
fs.rename("hey.txt","hello.txt",function(err){
    if(err)console.error(err);
    else console.log("done")
})*/
// http and https
const http = require('http');
const server=http.createServer(function(req,res){
    res.end("hello world")
})
server.listen(4000);
 