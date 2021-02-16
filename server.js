var {createInterface} = require("readline")
var rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is your name?:    ", (name)=>{
    rl.question("What is your age?:    ", (age)=>{
        rl.question("What is your role?:    ", (role)=>{

    rl.close()
    })
})
})
rl.on("close", ()=>{
    console.log("\n BYE!")
    process.exit(0)
})