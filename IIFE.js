// Immediately Invoked function Expression
(function database(){
  console.log("Database Connected");
  let a =4
  console.log(`${a}`); // prints 4  
})();

((name)=>{
    console.log(`DB connected Two ${name}`);
    
})("Vishal");
