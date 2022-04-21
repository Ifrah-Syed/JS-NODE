console.log("this is tut7");
let name="ifra"; //global
let name1="irtiza";
let name2="nida";
let name3="harry";
// console.log(name+" is here")
// console.log(name1+" is here")
// console.log(name2+" is here")
// console.log(name3+" is here")
// NOT FEASIBLE

// USE FUNCTIONS FOR THIS

// FUNCTION GREET
function greet(name){
    let name1="sana"; //global name 1 is not changed..same result..Its local for function
    console.log(name+" is here")
}
greet(name)
greet(name1)
greet(name2)
greet(name3)
 
let time="12";
let time1="5";
let time2="8";


// FUNCTION GREET2
function greet1(name,time){
    console.log(name+" was here"+" at "+time);
}
greet1(name,time);
greet1(name1,time1);
greet1(name2,time2);


// FUNCTION GREET3
function greet3(name,time="its 12 noon"){
    console.log(name+" was here"+" at "+time);
}
// default value for time only if no argument passed
// same result..
greet3(name,time);
greet3(name1,time1);
greet3(name2,time2);
greet3(name1); //default value of time used

let returnVal=greet(name2);
console.log(returnVal) //will give nothing;undefined


// FUNCTION SUM
function sum(a,b,c){
    let d=a+b+c;
    return d;
    console.log("blaa"); //anything written after return  doesnot execute
}
let returnSum=sum(1,2,2);
console.log(returnSum); //returns sum