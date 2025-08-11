function getname(name){
    console.log(`my name is  ${name}`);
}

getname("mandela"); // my name is  mandela
let myname=getname("mandothari"); // returns undefined
console.log(myname); // undefined

//-------------------------2----------------------------------------- 
console.log("-------------2------------------------------------");

function getnamee(name){
    return (`my name is  ${name}`);
}

getnamee("mandela"); // my name is  mandela 
let mynamee=getnamee("mandothari"); // returns my name is  mandothari 
console.log(mynamee); // my name is  mandothari  


//---------------------------3-----------------------------------------
console.log("------------------3-------------------------------");
// 

function getnameee(name){
    return (`my name is  ${name}`); // return is used to return the value of the function
    console.log(`my name is  ${name}`); //  this will not be executed
    
}

getnameee("mandela"); // my name is  mandela
let mynameee=getnameee("mandothari"); // returns my name is  mandothari
console.log(mynameee); // my name is  mandothari
