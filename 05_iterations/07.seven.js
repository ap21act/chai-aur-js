const myNums=[1,2,3,4,5,6,7,89,11]

const nym= myNums.map((num)=>{
    return num+10
})
// console.log(nym);

const newNym = myNums.
    map((num)=>num*10).
    map((num)=>num+1).
    filter((num)=>{
        return num>31
    })

console.log(newNym);
    