//We are going to start with Operating System Module 
let os = require('os')
//When we have to konw that what is our windows architecture name so that we can use this function 
console.log(os.arch())
//When we have to konw that what is our windows host name so that we can use this function 
console.log(os.hostname())
//This function will know about which windows we are using 
console.log(os.platform())
//This function will know about the directory of the temporary file
console.log(os.tmpdir())
//This function will konw about the operating system name
console.log(os.type())