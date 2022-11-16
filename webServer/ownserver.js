let http = require('http')
let fs = require('fs')
const server = http.createServer(function (req,res) {
    const data = {"name":"haris","class":"programer"}
    
    if(req.url=="/"){
        res.write("Welcome to home page side")
        res.end()
    }
    else if(req.url=="/contact"){
        res.write("Welcome to contact page side")
        res.end()
    }
    else if(req.url=="/about"){
        res.write("Welcome to about page side")
        res.end()
    }
    else if(req.url=="/userapi"){
        res.writeHead(200,{"Content-type":"text/html"})
        // res.write(JSON.stringify({name:'yadav ji',class:'middle'}))
        let data = fs.readFile('D:/Node.js/webServer/hii.txt',function (err,files) {
           console.log(err)
           res.end(files)
        })
 
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.write("404 NOT FOUND")
        res.end()
    }

   
}).listen(8080)
