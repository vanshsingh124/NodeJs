let fs = require ('fs')
let http = require('http')
let server = http.createServer()
server.on('request',function (req,res) {
    let redable = fs.createReadStream('D:/Node.js/ReadStream/input.txt')
    redable.on('data',function (chunk) {
        res.write(chunk)
        res.end()

    })
    redable.on('end',function () {
        res.end()
    })
    redable.on('error',function (err) {
        console.log(err)
        res.end("File not found")
        
    })

}).listen(3000)