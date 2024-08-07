//singleton 
//Objects Literals

// Object.create. --singleton method constructor method

const tinderUser = new Object()



//using symbol in object [mySym] in object act as symbol
const mySym = Symbol("key1")

//Objects Literals
const JsUser ={

    name:"hitesh",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    full_name:"adarsa",
    [mySym]:"adarsa1", // Symbol decleration in Object
    "full name":"ssoo"

}

console.log(JsUser.email); // one way to access value but another way

console.log(JsUser["email"]) //another way 

console.log(JsUser["full_name"]);

console.log(JsUser.full_name);

//what if key is "full name"

console.log(JsUser["full name"]);
JsUser[mySym] ="papa1"
console.log(JsUser[mySym]);
console.log(JsUser)

Object.freeze(JsUser) //freezing Object

//greeting in Object

JsUser.greeting= function(){
    console.log('Hello to the brave world');
    
}
JsUser.greeting1= function(){
    console.log(`Hello to the brave world ${this.age}`);
    
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

console.log(JsUser.greeting1);
console.log(JsUser.greeting1());










