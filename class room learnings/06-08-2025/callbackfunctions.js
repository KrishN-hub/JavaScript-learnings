// calculator in callback funtion 


// function calc (num1,num2,oper){
//     console.log (oper( num1,num2));
// }

// calc(20,20,sum);
/*
function sum(a,b) {
 return  a+b;
}

function sub( a,b) {
    return  a-b;
}
function mul( a,b) {
    return  a*b;
}
function div( a,b) {
    return  a/b;
}

function calculator(num1,num2, operator){

            if (isNaN(num1 ) && isNaN(num2)){
                console.log ( "num1 & num2 are not number");
                return; 
            }
            if (isNaN(num1)){
                    console.log ( "num1 is not a number");
                    return;
                }else if( isNaN(num2)){
                    console.log("num2 is not a number");
                    return;
                }else{
                    num1 = Number(num1);
                    num2 = Number(num2);
                   console.log(operator ( num1,num2));
                    
                    
                    }
                    }
                
                    calculator("name",5, sum);
                    calculator(5,"name",sub);
                    calculator(5,5,mul);
                    calculator(5,0,div);
            */
//-----------------------------------------------------------------
// in arrow function
sum = (a,b) => a + b;
sub = (a,b) => a - b;
mul = (a,b) => a * b;
div = (a,b) => a / b;
// calculator function
calc = (num1,num2, operator) => { 
    
    if (isNaN(num1 ) && isNaN(num2)){
        console.log ( "num1 & num2 are not number");
        return; 
    }
    if (isNaN(num1)){
            console.log ( "num1 is not a number");
            return;
        }else if( isNaN(num2)){
            console.log("num2 is not a number");
            return;
        }else{
            num1 = Number(num1);
            num2 = Number(num2);
            console.log(operator ( num1,num2));

        }
    }

    calc("name","namr", sum);
    calc("name",5, sum);
    calc(5,"name",sub);
    calc(5,5,mul);
    calc(5,0,div);
    






