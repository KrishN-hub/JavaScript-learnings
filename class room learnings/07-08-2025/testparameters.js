 
// get array of all elements
function TestPara(...number){
    console.log(...number);// 
    console.log(typeof number);  // number is an array

}
TestPara(10,20,30,40,50,60,70); 

// calculate total sum of array elements intro
console.log("--------for loop------------");
function TestTotal(...number){
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
        }
        console.log(sum);
    }
    TestTotal(10,20,30.40,50);
    TestTotal(20,90);
    

    console.log("--------for of------------");
// for of 

function TestForOf(...numb){
for(let i of numb) {
    console.log(numb[i]);
    
}
}
/*
function TestForOf(...numb){
    let sum=0;
    for(let i of numb) {
        sum += numb[i]
    }
    console.log(sum);
    }
    */
TestForOf(10,20,30,40,50,60,70);


// for in 
console.log("--------for in------------");


function TestForIn(...num){
for (let i in num) {
    console.log(num[i]);
}
}
TestForIn(10,20,30,40,50,60,70);


// foreach loop
console.log("--------foreach------------");
function TestForEach(...marks) {
    marks.forEach ( function (m,i) // i is index of element 
    {
        console.log(`${m}-${i}`); 
        });
        }
        TestForEach(10,20,30,40,50,60,70); 


// reduce function
console.log("--------reduce function------------");
function TestReduce(...marks) {
    let sum = marks.reduce((a,b) => a+b,0); 
    console.log(sum);
    }
    TestReduce(10,20,30,40,50,60,70);

    

