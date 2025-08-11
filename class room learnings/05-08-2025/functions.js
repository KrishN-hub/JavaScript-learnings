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
 // function with backtick
 function getmyname(name){
    console.log(`my name is  ${name}`);
}
 getmyname( "K.Pirunthavan");
 getmyname( "Aalavanthaan");
 getmyname( );
*/
/*
// function with return deafault value and parameter
 function getmyname(name="enter your name" ){
    console.log(`my name is  ${name}`);
}
 getmyname( "K.Pirunthavan");
 getmyname( "Aalavanthaan");
 getmyname( );
*/

// function with parameter and return value that two nummber add and return the result with validate the number is number or not
function sum(num1,num2){
    if (isNaN(num1 ) && isNaN(num2)){
        console.log ( "num1 & num2 are not number");
        return; 
        }
        else if (isNaN(num1)){
            console.log ( "num1 is not a number");
            return;
        }else if( isNaN(num2)){
            console.log("num2 is not a number");
            return;
            }else if ( typeof num1 === 'number' && typeof num2 === 'number'){
                console.log( num1 + num2);
                return;
                }else if ( typeof num1 !== 'number' && typeof num2 === 'number'){
                    console.log(Number(num1) + num2);
                    return;
                    }else if ( typeof num1 === 'number' && typeof num2 !== 'number'){
                        console.log(num1 + Number(num2));
                        return;
                        }else if ( typeof num1 !== 'number' && typeof num2 !== 'number'){
                            console.log(Number(num1) + Number(num2));
                            return;
                            }else{
                                console.log("both are not number");
                                return;
                            }
                            }
        
                            
                        sum("name 1","name 2");                        
                        sum("name",20);
                        sum(10,"name");
                        sum('10',20);
                        sum(10,'20');
                        sum('10','20');
                                    // wrong