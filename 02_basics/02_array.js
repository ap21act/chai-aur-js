let marvel_heros=["thor","ironman","spiderman"]
let dc_heros =["superman","flash","batman"]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

let ap= marvel_heros.concat(dc_heros)

const all_new_heros=[...dc_heros,...marvel_heros]

let another_array=[1,2,3,[1,2,3,4],[1,2,3,[1,2,3,[12,122]]]]

let realArray=another_array.flat(Infinity);

console.log(realArray);


console.log(ap);

// console.log(all_new_heros);


