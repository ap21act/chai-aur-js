const user={
    user1:"hitesh",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.user1}, welcome to website`)
        console.log(this)
    }

}
// user.welcomeMessage()
// user.user1="sam"
// user.welcomeMessage()

// const chai = function chai(){
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai()

const chai = ()=>{
        let username="hitesh"
    console.log(this);
}

// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2

// }


// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2)

const addTwo=(num1,num2)=> ({username:"bharat"})



console.log(addTwo(2,3));

