// calculator in callback funtion 


// function calc (num1,num2,oper){
//     console.log (oper( num1,num2));
// }

// calc(20,20,sum);

function sum(num1,num2) {
 return num1 + num2;
}

function sub(num1,num2) {
    return num1 - num2;
}
function mul(num1,num2){
    return num1 * num2;
}
function div(num1,num2){
    return num1 / num2;
}

function calculator(num1,num2, operator){

    if (isNaN(num1)){
            console.log ( "num1 is not a number");
            return;
        }else if( isNaN(num2)){
            console.log("num2 is not a number");
            return;
        }else{
            num1 = Number(num1);
            num2 = Number(num2);
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
                }
                    calculator("name",5, sum);
                    calculator(5,"name",sub);
                    calculator(5,5,mul);
                    calculator(5,0,div);







