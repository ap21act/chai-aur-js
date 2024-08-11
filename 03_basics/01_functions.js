// console.log("H");

function sayMyName(){
    console.log("I");
}

// sayMyName()


// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
    
// }

function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
    
}

const papa= addTwoNumbers(2,4)

// console.log(`answer is ${papa}`)

function loginUserMessage(username="sam"){
    if(!username){
        
        return console.log("Please enter a username")

    }
    return `${username} just logged in`
    
}
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(...num1){ //...rest operator and spread operator
    return num1

}

// console.log(calculateCartPrice(1,2,3,4))


const user ={
    username:"adarsha",
    price:199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject({
    username:"sam",
    price:399
})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray [1]
}
console.log(returnSecondValue(myNewArray))

