// MODULES IN NODE JS

const fs=require("fs"); 
// imports fs module
const text= fs.readFileSync("text.txt","utf-8");
console.log(text);

// replace content
text1=text.replace("text","ifra");
console.log(text1)

// creating a new file
fs.writeFileSync("ifrah.txt",text);