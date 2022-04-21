// CREATING CUSTOM MODULES(RECEIVING EXPORTED MODULES)

const average=require('./mod.js')
// whatever mod module exports is saved in variable average
// or ./mod
console.log(average([3,4]));
console.log('this is index.js');

// CASE 2

// BELOW.. in case mod exports an object with avg:average,name:"ifra"..code in index.js below

// const average=require('./mod.js')
// console.log(average.avg([3.4]));

// for using average function in object

