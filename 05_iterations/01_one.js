// for loop


// for (let i = 0; i <= 10; i++) {
//     const element = i
//     if(element==5){
//         //console.log("5 is Best");
        
//     }else{
//         //console.log(element);

//     }

    // for (let i = 0; i <=10; i++) {
    //     console.log(`Outer Loop ${i}`);
        
    //     for (let j = 0; j <= 10; j++) {
    //         console.log(`Inner Loop ${j} with outer loop ${i}`);
            
            
    //     }
        
    // }
    
let myArray=["superheros","flash","superman"]

for (let index = 0; index <= myArray.length; index++) {
    let element = myArray[index];

    if (element==null ||element==undefined) {
        element="Adarsha"
        
    }

    // console.log(element);
    
    
}

//break and continue

for (let i = 1; i <=20; i++) {

    if(i==5){
        console.log(`${i}`)
        continue
    }
    if(i==6){
        console.log(`${i}`)
        continue
    }
    console.log(`Value of i is ${i}`);
    
    
}
    
