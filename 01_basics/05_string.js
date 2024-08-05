let name="hitesh"
let repoCount = 50

let gameName = "adarsha-apudef"

console.log(name+repoCount);

console.log(`Hello my name is ${name} and repo is ${repoCount} `);


console.log(name.toUpperCase());

let newString = gameName.substring(-8,7) //division of string in another string with substring but last is not included

console.log(newString);


let anotherString = gameName.slice(-5,7)

console.log(anotherString);


const newStringOne ="    adarsha "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://adarsha.paudel.com/adarsha%20paudel"

console.log(url.replace('%20',''))
console.log(url.includes('darsha'))

console.log(gameName.split('-')); // does split code wrt -  output [ 'adarsha', 'apudef' ]






