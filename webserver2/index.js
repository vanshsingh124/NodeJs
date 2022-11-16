let http =require('http')
let fs = require('fs')

let server = http.createServer(function (req,res) {
  

if(req.url=="/"){
    res.end("Hello from the home sides")
}
else if (req.url=="/about"){
    res.writeHead(200,{"Contant-type":"text/html"})
    res.end("Hello from AboutUs page")
}
else if (req.url=="/userapi"){
 
    fs.readFile('D:/Node.js/webServer/jason.json','utf-8',function (err,data) {
        console.log(err)
        const ob = JSON.parse(data)
        console.log(ob[0].name)
        res.end(ob[0].name)
    })
    
    res.writeHead(200,{"Content-type":"application/json"})
   
    // // res.write(JSON.stringify({name:'yadav ji',class:'middle'}))
}
else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end("<h1>404 error pages. Page dosen't exist</h1>")
}}).listen(8220)