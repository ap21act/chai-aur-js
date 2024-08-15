const userEmail=[]
if (userEmail) {
    console.log(`His email is ${userEmail}`);
    
}else{
    console.log("No email");
    
}
console.log(userEmail.length);

const isLoggedInFromGoogle=true
const isLoggedInFromApple=false

if (isLoggedInFromApple && isLoggedInFromGoogle) {
    console.log("Sucess!");
    
}

// falsy value

// false, 0, -0, {}, BigInt 0n, '', null, undefined, NaN


//truthy value

// "false", "0", '  ', [], {}, function(){} => empty function,

// if(userEmail.length=== 0){
//     console.log("Object is empty")
// }


//cehcking for object

const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
    
// }
// console.log(Object.keys(emptyObj).length===0);



//Nullish Coalescing Operator (??) : null undefined

let val1;

// val1=5??10

// val1=null??17

val1=undefined ?? null??22

console.log(val1);


// Terniary  Operator

// condition ? true:false

const iceTeaPrice=29

iceTeaPrice>30 ? console.log("greator than 30"): console.log("less than 30");

