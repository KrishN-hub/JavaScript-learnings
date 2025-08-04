function Add(num1,num2){
    let Addition = num1 + num2;
    return Addition;
}

function Sub(num1,num2){
    let Substract = num1 - num2;
    return Substract;
}

function Mul(num1,num2){
    let Multiply = num1 * num2;
    return Multiply;
}

function Div( num1, num2){
    let Division = num1 / num2;
    return Division;
}
    
function Mod(num1, num2){
    let Modulus = num1 % num2;
    return Modulus;
}

let numb1 = 50;
let numb2 = 7;

let result = Add(numb1,numb2);
console.log(result);

let result2 = Sub(numb1,numb2);
console.log(result2);

let result3 = Mul(numb1, numb2);
console.log(result3);

let result4 = Div(numb1, numb2);
console.log(result4);

let result5 = Mod (numb1, numb2);
console.log(result5);
