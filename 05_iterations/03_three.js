
const arr=[1,2,3,4,5]


//For of Loop
for (const element of arr) {
    // console.log(element);
    
}

const greeting="Hello World!"

for (const greet of greeting) {
    // console.log(greet);
    
    
}

//Maps

const map =new Map()

map.set('IN',"India")

map.set('USA','United states of America')

// console.log(map);

for (const [key,value] of map) {

    // console.log(key);
    // console.log(value);
    
    
    
}

const myObj={
    'Game1':"NFS",
    Game2:"Spiderman",
    "game3":"papa",
}

for (const [key,value] of Object.values(myObj)) {
    console.log(`${key} is ${value}`);

    // N is F
    // S is p
    // p is a
    
}