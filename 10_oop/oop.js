const user={
    username:"hitesh",
    loginCount :8,
    signedIn:true,

    getUserDetails:function(){
        // console.log('Got user details from databases');
        // console.log(`Username:${this.username}`);
        // console.log(this);
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



//constructor function
// const promiseone = new Promise()

function User(username,loginCount, isLoggedIn){

    // myusername= username
    this.username=username
    // my variable =  passed variable/data

    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(` Welcome ${this.username}`);
    }

    // return this

}


const userOne = new User('hitesh',12,true)
const userTwo = new User('Adas',11,false)



console.log(userOne.greeting());
// console.log(userTwo);
// userOne.greeting()

