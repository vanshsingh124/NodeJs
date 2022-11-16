let fs = require('fs')
// For creating a new file 
// fs.writeFileSync('fs module/hello.txt',"Hello guys what are you doing")
// Appendng new things to file
// fs.appendFileSync('fs module/hello.txt'," I am fine sir:)")
// Reading a file 
// let read = fs.readFileSync('fs module/hello.txt')
// let data = read.toString()
// console.log(data)
// Renaming a file  this is
// fs.renameSync('fs module/hello.txt','fs module/bye.txt')



//Working with Asynchronously
//For creating a new a file 
// console.log(fs.writeFile('hy.txt', 'Hello guys what are you doing', function (err) {
//     console.log("File is created that's very good")
// }))

//Appendng new things to file
// fs.appendFile('hy.txt', " I am fine sir:),",function (err) {
//     console.log("Successfully we have appended the data")
// })

// Reading a file 
// let read = fsa.readFile('hy.txt',"UTF-8",function (err,data) {
//     console.log(data)
//     console.log(err)
// })

// Renaming a file 
// let rename = fs.rename('hy.txt','hye.txt',function (err) {
//     console.log("Nice the file is renamed")
// })
// console.log(rename)