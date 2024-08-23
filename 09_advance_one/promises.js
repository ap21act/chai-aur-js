// // fetch('https://mail.google.com/mail/u/0/#inbox').then().catch().finally()


// const promiseOne =new Promise(function(resolve,reject){
//     //DO an async task
//     //DB calls, cryotograpgy,network call
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve()
//     },1000)

// })

// promiseOne.then(function(){
//     console.log("Prmoise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()

//     },1000)
// }).then(()=>{
//     console.log('Async 2 resolved');
// })

// const promiseThree =new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:"chai",email:"chai@chaiaurcode.com"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
// })

// const promiseFour= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error =true
//         if(!error){
//             resolve({username:'hitesh', password:"123"})
//         }else{
//             reject('Error something went wrong')
//         }
//     },1000)
// })

// async function consumePromiseFIve(){
//     try {
//         const response =await promiseFour
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFIve()


// async function getAllUsers (){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
    

// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})