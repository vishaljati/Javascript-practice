// const userdetails = {
//     username : "Vishal",
//     password : "123abc"
// }

function user(anyobject){
console.log(`Username is ${anyobject.username} and
           password is ${anyobject.password}`);

}
// user(userdetails)
user({
    username:"vishal",
    password: "123abc"
})

// array in function
function thirdvalue (getArray)
{
 return getArray[2]
}

console.log(thirdvalue([12,2,9,21]));
