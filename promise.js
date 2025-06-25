setTimeout(()=>{
    console.log(`Hello World`);
    
},2000)



const promise1= new Promise (function(resolve,reject){
 
    let error = false;
    if (!error) {

   setTimeout(function(){
    console.log(`Hello Vishal!`);
    resolve({name:"Vishal",
             clg:"NSEC" });
    },2000)
         }

    else{
       reject(`Error`)
        }
})
promise1.then(function(user){
    return user.name;
})
.then(function(username){
//    console.log(username);  
})
// .catch((error)=>console.log(error)
// )
// // .finally(()=>console.log("Something is done")
// )
