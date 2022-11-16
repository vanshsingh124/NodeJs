//We are going start path module 
let path = require('path')
//It will returns the directory name in which you are
console.log(path.dirname( "d:/Node Js/operatingSystem.js"))
//It will return the extension name of the file
console.log(path.extname("d:/Node Js/operatingSystem.js"))
//It will return the file name 
console.log(path.basename("d:/Node Js/operatingSystem.js"))
//I will return the Root,Directory,Basename,Extension,Name of the file
let mypa = path.parse("d:/Node Js/operatingSystem.js")
console.log(mypa)