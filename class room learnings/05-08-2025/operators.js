/*
function calc(num1,num2,operator){
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
        }else{
            num1 = Number(num1);
            num2 = Number(num2);
            switch (operator) {
                case "+":  
                    return num1 + num2; 
                    break;
                    case "-":
                        return num1 - num2;
                        break;
                        case "*":
                            return num1 * num2;
                            break;
                            case "/":
                                if (num2 != 0) {
                                    return num1 / num2;
                                    }
                                    else {
                                        console.log("Error: Division by zero is not allowed");
                                        return;
                                        }
                                        break;
                                        }
                                        }

        }    
        calc("name 1","name 2","+");                      
        calc("name",20, "+");
        calc(10,"name", "+");
        calc('10',20 , "-");
        calc(10,'20', "+");
        calc('10','20',"*");
        */

        function calc2(num1,num2,operator){
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
                }else{ 
                    if (operator != "+" && operator != "-" && operator != "*" && operator != "/"){
                        console.log("Invalid operator");
                        return;
                        }
                        else{
                            num1 = Number(num1);
                            num2 = Number(num2);
                            switch (operator) {
                                case "+":
                                    return num1 + num2;
                                    break;
                                    case "-":
                                        return num1 - num2;
                                        break;
                                        case "*":
                                            return num1 * num2;
                                            break;
                                            case "/":
                                                if (num2 == 0) {
                                                    console.log("Error: Division by zero is not allowed");
                                                    return;
                                                    }
                                                    else{
                                                        return num1 / num2;
                                                        }
                                                        break;
                                                       


                    
                                                }
                                                }
                                            }
                                        }
                                                
        
               
                calc2("name 1","name 2","+");                      
                calc2("name",20, "+");
                calc2(10,"name", "+");
                calc2('10',20 , "-");
                calc2(10,'20', "+");
                calc2('10','20',"*");
                calc2(10,20,"*");



