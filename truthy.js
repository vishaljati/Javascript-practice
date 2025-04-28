const myfunc = ()=>{
    console.log("Hi Vishal");
}
myfunc()

const myarr = []
if (myarr.length==0)
{
    console.log("Array is empty");
    
}
else{
    console.log("NOT empty");
    
}

const myobj={}
if (Object.keys(myobj)==0)
{
    console.log("Object is Empty");
    
}
else{
console.log("Not empty");

}
// Nullish Coalescing Operator
let val1
val1 = 10??undefined
console.log(val1);
