import fs from 'fs'
import os from 'os'

//!Synchronous
//fs.writeFileSync("./test.txt", "Hey There")

//!Async
//fs.writeFile("./test.txt", "Hey there, this is Asynchronous", (err) => {})

//!Synchronous..
// const read = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(read);


//!Asynchronous...
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err) console.log("ERROR ", err)
//         console.log(result);
// })

console.log(os.cpus().length);


