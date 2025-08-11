
// java basic print statement
console.log("welcome to node.js");
console.log('welcome to node.js');

// declare variables
var x = "seelan";
console.log (x); // prints: seelan

//find the variable data type
console.log(typeof(x));// string
console.log(typeof x); // 

//print various 
console.log(x,"seelan"); // prints: seelan seelan

// declare multiple variables with same name
var y = "seelan";
var y = "karan";
var y = "taran";
console.log(y); // when we print it never show error, coz it is overwriting the previous value of y variable - output will be "taran"

//  declare multiple variables with same name in 2015 standed ECMA script - es6 (modern java script)
let z = "mandothari";
// let z = "karan"; 
// let z= "taran";
console.log(z); // error will show when we try to redeclare the variable z - output will be "ReferenceError: Cannot redeclare variable  mutiple times"
// without using var keywod
let zz = "mandothari";
//let zz = "karan"; // error will show when we try to redeclare the variable z
// let zz = "taran";
console.log(z); // output will be "karan"

// declare variables without using var keyword
a = "madela"
console.log(a);

var b;
console.log(typeof b); // output will be undefined

let c;
console.log(typeof c); // output will be undefined

/*
const d;     // we can't declare variable without assigning value ( compair it into java final keyword)
console.log(typeof d); 
*/
const d = "moorthi mama";
console.log(d);
console.log(typeof d); // output will be string

// concatination of string different ways & string formating
let fname = "tharmi";
let lname = "naaha";
console.log(fname,lname); 
console.log("my name is: "+ fname+" "+lname); // normal concatination
console.log(`my name is: ${fname} ${lname}`); //  print using back tick (string template literals) for except using concatination(formatting)
