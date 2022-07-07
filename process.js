//process is an event emmiter 
process.on("exit",(code)=>{
 console.log("Process about to exit with code ==>", code)
})

process.on("uncaughtException",(err)=>{
    console.log("An error ocurred ==> \n", err)

   process.exit();
})

process.stdin.resume();
console.dog()