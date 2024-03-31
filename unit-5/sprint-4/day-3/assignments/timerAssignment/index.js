// process.nextTick()


function delayedFunction(){
    console.log("Execute after 2 second");
}

console.log("Start");

process.nextTick(()=>{
    setTimeout(delayedFunction,2000);
})

console.log("End");


//output=> start , end , exceute after 2 second.



function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 1000000; i++) {
      sum += i;
    }
    console.log("Sum:", sum);
  }
  
  const startTime = process.hrtime();
  calculateSum();
  const endTime = process.hrtime(startTime);
  
  console.log("Execution time:", endTime[0] * 1e9 + endTime[1], "nanoseconds");
  




  const fs = require('fs');

  console.log("Start of the program");
  
  setImmediate(() => console.log("setImmediate"));
  
  process.nextTick(() => console.log("process.nextTick"));
  
  setTimeout(() => console.log("setTimeout"), 0);
  
  setInterval(() => {
    console.log("setInterval");
  }, 0);
  
  Promise.resolve().then(() => console.log("Promise"));
  
  fs.readFile(__filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File reading");
  });
  
  console.log("End of the program");
  
