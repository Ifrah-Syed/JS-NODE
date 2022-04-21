// synchronous or blocking - line by line execution
// asynchronous or non blocking - no line by line execution looks apparently but it does.. callbacks will fire

// const fs=require("fs");
// const text= fs.readFile("text.txt","utf-8");
// console.log(text);

// will give error like this bcx readfile is non blocking as read file requires a call back function
const fs=require("fs");
const text= fs.readFile("text.txt","utf-8", 
(a,b)=>{
    console.log(a,b);
}
);
console.log("this will print first and then above");
// it prints first because readfile will read data in background, meanwhile this will print and then call back function(arrow one) will fire
// asynch is preferred bcx it doesnt block the rest of the lines while waiting for one line
// node JS works on non blocking IO model(based on callbacks)
// above.. a is error and b is data..so replace a,b with error and data
