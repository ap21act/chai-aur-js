console.log("2">1) //Converted "2" a string to number and executed comparison

console.log("2a">2) //Error in converting "2a" in number as this will be null

console.log(null>0) //conversion happend but null converted 0 is not bigger than 0
console.log(null>=0) //true because of conversion happend and this statemnet is true
console.log(null==0) //equality  check without conversion of null to 0
console.log(null===0) 
console.log(null<=0) // same as number 2 reason

// === understanding it's strict check but not value also datatype

console.log("2" ==2) //  true due to dataType conversion and equality check
console.log("2"===2) //false due to dataType check as well as string vs number check
