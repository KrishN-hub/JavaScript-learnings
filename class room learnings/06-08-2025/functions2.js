// assign value for function   - function expression  - from here arrow funtion was created in ESMA 6

getname = function( name) {
    console.log( name );
    }; // end of function expression   
    getname( "John ceana" );

    console.log(typeof getname); // output: function


//-----------------------------------------------------------------------------
console.log("-------------------------------------------------------------")


// arrow funtions - Arrow functions are defined using the => (fat arrow) operator. 


getname = (name) =>console.log(name);  // arrow function expression
getname( "John ceana2" );


getname = (name) => { // arrow function expression
    console.log(name); 

}; 
getname( "John ceana2" );

//normal function
Sub = function(x,y) {
    return x-y;
    }
    console.log(Sub(8,6)); // output: 2

// arrow function
Sum = (a,b) => a + b; // return keyword no needed
console.log(Sum(5,5)); // output: 11 

//--------------------------------------------------------------------
// anonimus function - Immediately Invoked Function Expression
//default
(function(){
    console.log("IIFE");
}) ();

//parameters 
(function(name){
    console.log(`my name is  ${name}`); 
}) ('K.pirunthavan'); 

//-------------------------------------- call back function-----

function getmyinfo(name,fun){
    console.log(`my name is  ${name}`);
    fun();
}

function gdbye(){
    console.log("good bye");
}

getmyinfo("pirunthavan", gdbye); 

//----------------------------------

  
