/*
// basic function
function getmyname(){
    console.log("my name is K.Pirunthavan");
}
 getmyname();
 getmyname();
 getmyname();
*/
/*
// function with parameter
 function getmyname(name){
    console.log("my name is "+  name);
}
 getmyname( "K.Pirunthavan");
 getmyname( );
 getmyname( "Aalavanthaan"); 
 */
/*
 // function with return value
 function getmyname(name){
    console.log(`my name is  ${name}`);
}
 getmyname( "K.Pirunthavan");
 getmyname( "Aalavanthaan");
 getmyname( );
*/
/*
// function with return value and parameter
 function getmyname(name="enter your name" ){
    console.log(`my name is  ${name}`);
}
 getmyname( "K.Pirunthavan");
 getmyname( "Aalavanthaan");
 getmyname( );
*/

// function with parameter and return value that two nummber add and return the result with validate the number is number or not
function sum(num1,num2){
    if (isNaN (num1) && isNaN(num2)){
        console.log("invalid input");
        }
        else{
            console.log(num1 + num2);
            }
    

}
sum(10,20); // output 30
sum(); // output invalid input
sum("");// output invalid input
