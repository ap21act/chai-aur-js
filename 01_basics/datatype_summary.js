/* Primitive dataType

7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

*/

/* Reference dataType (Non-primitive)

types: Array, Objects, Functions

*/

const id =Symbol('123')
const anotherId = Symbol("123")

// False due to SYmbol functions as unique
console.log(id ===anotherId)

const bigNumber = 1234567890102839402223133442n

const heros =["ironman","batman"] //array

const obj ={
    name:"hitesh",
    age:22,
    class:"tweleve",
}
 
let myFunction = function(){
    console.log("Hello World")
}
console.log(typeof id);

//  Stack (Primitive), Heap (Non-Primitive)



