//Immeditely Invoked  Function Expression


(function chai(){
    console.log(`DB CONNECTED`);
    
})();

(function chai1(){
    console.log(`DB CONNECTED 1`);
    
})();
(()=>(console.log(`DB COnnected 2`)
))();

(({name, surname})=>(console.log(`DB COnnected 2 ${name} and ${surname}`)
))(name="hitesh" surname="papa");


(({name, surname}) => {
    console.log(`DB Connected to ${name} and ${surname}`);
})({name: "hitesh", surname: "papa"});
