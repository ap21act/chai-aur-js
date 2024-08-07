const tinderUser= new Object(); // singleton Object/

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false

// console.log(tinderUser);


const regularUser={
    email:"somegmail.com",
    fullname:{
        userFullName:{
            firstname:"hitesh",
            lastName:"choudary"

        }
    }
}

// console.log(regularUser["fullname"]["userFullName"]["firstname"]);

const Obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const Obj2={
    1:"a",
    4:"papa"
}

const  obj3 ={
    ...Obj1, ...Obj2
} //spreading

// console.log(obj3);


const returnedObj = Object.assign({},Obj1,Obj2) // for new array to store concat object due to return property of assign. {}=> target for concat

// console.log(returnedObj);

const returnedObj1 = Object.assign(Obj1,Obj2)

// console.log(returnedObj1);
// console.log(Obj1);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); 
// console.log(Object.values(tinderUser));



const course={
    courseName:"Js in HIndi",
    price:999,
    courseInstructor:"Hitesh"

}

//course.courseInstructor 



//de-structure in object in JS
const{courseInstructor}= course // accessing way api calls value / react data
const{courseInstructor:instr}= course // rename 
console.log(courseInstructor);

console.log(instr);











