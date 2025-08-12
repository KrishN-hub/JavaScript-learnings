let obj = new Object;
 console.log(typeof obj);

 console.log("-----------method 2-----------------");

 let obj1 = {}; 
 console.log(typeof obj1);

 console.log("----------------------------");

 let Student = {
    "Firstname": "pirunthavan",
    "Lastname" : "krishnakumar",
    "Age" : 25,
    "Gender": "Male",
    "Subject":["maths",
        "tamil",
        "english"
    ],
 };

 console.log(Student);
 console.log(Student.Firstname);
 console.log(Student["Lastname"]);
 console.log(  Student.Subject[0]);

 console.log("----------------------------");
// for in is used for object
 for (let key in Student) {
    console.log(key);         //  print key 
 }
 console.log("----------stu------------------");
 for(let Stu in Student){
    console.log(Student[Stu]); // print values
 }
 console.log("------------stu2----------------"); 
for( let Stu2 in Student){ 
    if( Array.isArray(Student[Stu2]) ){ // check if it is array
        for(let x of Student[Stu2]){  
            console.log(x); // print values
            }
    }
}
console.log ("------------stu3----------------");
for( let Stu2 in Student){ 
    if( (Student[Stu2]) instanceof Array){ // check if it is array
        for(let x of Student[Stu2]){  
            console.log(x); // print values
            }
    }
}

 console.log("----------------------------");


/*
 for (let key of Student) {
    console.log(key);         //  Student is not iterable
 }
    

 for(let[key,value]of Student) {
    console.log(key);         //  print key and value
 }
*/


console.log("----------------------------");
// of is used for array and set only 
let Subject = ["maths", "tamil","english"]


for(let s of Subject){
    console.log(s);
    }
