const algorithms = require('./sort-algorithms'); //this is receiving

const sorting = algorithms();

const myArr = [12, 3, 5, 1, 6, 9, 23, 4, 19 , 13];

// sorting.quick(myArr); //calling the method over from sort-algorithms.js, which is the key of the object 
                      //(the value is the actual function name); best practice is to name function same 

// use this and 'debugger' with terminal node --inspect-brk indexedDB.js

sorting.merge(myArr);