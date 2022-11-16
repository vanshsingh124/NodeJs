let http = require('http')
let fs = require('fs')
let server = http.createServer(function (req,res) {
    if(req.url=='/'){
        res.end('Hello from home side')
    }
    else if(req.url=='/api'){
        let read = fs.createReadStream('D:/Node.js/PipeStream/hii.json')
        let pipe=read.pipe(res)
        // res.writeHead(200,{'Content-type':'application/json'})
       
        

    }
    
}).listen(1230)