const myNums=[1,2,3]

// const initialVal=0

// const myTotal=myNums.reduce((acc,currval)=>{
//     console.log(`Accumulator is ${acc} and Current Value is ${currval}`);
    
//     return acc+currval
// },99)


const myTotal = myNums.reduce((acc, currVal)=>acc+currVal,0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"Js Course",
        price:2999,
    },
    {
        itemName:"Py Course",
        price:999,
    },
    {
        itemName:"Mobile Course",
        price:12999,
    },
]

const total= shoppingCart.reduce((acc,item)=>{return acc+item.price},0)

console.log(total);
