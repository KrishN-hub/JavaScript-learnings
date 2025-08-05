// check same variable declare using var, let and const
var x;
x=10;
// let x;
console.log(x); //syntaxError: Identifier 'x' has already been declared

//data types- number, string, boolean, null, undefined, object, array, symbol, function
y=10;
console.log (typeof y); //number

y=10.5
console.log (typeof y); //number

y=10_1020_30
console.log (typeof y); //number

//object defining
y = {};
console.log (typeof y); //object

z=[];
console.log (typeof z); //object (but it's an array)

let a = null;
console.log (typeof a); //object

let b = function(){

};
console.log (typeof b); //function

let c = undefined;
console.log (typeof c); //undefined

let d = 16082004n;
console.log (typeof d); //bigint (ESMA Script 6.0)

let e = 16082004;
console.log (typeof e); //number

let f = Symbol("mandaan");
console.log (f); // Symbol(mandaan)
console.log (typeof f); //symbol
