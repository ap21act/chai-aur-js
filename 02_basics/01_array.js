const myArr=[1,2,3,4,true, "hitesh"]
// console.log(myArr[2]);

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1])


// Array methods

// myArr.push(6) //push item at last

// myArr.pop()
// myArr.unshift(1) //insert item at first
// myArr.shift() //remove item from first
// console.log(myArr);

// console.log(myArr.includes("hitesh")) // check if it is there and gives boolean value

// console.log(myArr.indexOf(3)) // return -1 for not found and gives index if found


// const newArr = myArr.join()

// console.log( newArr); // type String output: 1,2,3,4,true,hitesh

//slice, splice

console.log("A ",myArr)

const myn1 = myArr.slice(0,3) // doesn't includes bottom range limit and doesn't change main array

console.log(myn1)
console.log(myArr)


const myn2 = myArr.splice(0,3) // includes range does slice and changes main array 

console.log(myn2)
console.log(myArr)

