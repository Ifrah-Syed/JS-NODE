// CREATING CUSTOM MODULES(EXPORTING MODULES)

console.log('this is module');
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

module.exports=average;

// CASE 2

// module.exports={
//     avg:average,
//     name:"ifra"
// }