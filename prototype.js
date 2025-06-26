let lang = ["py","js","cpp"]
Object.prototype.printme= function() {
    console.log("It is an Array");

}
// lang.printme();
let str ="Vishal  "
// console.log(str.length);

String.prototype.truespace= function() {
      console.log(`True Length: ${this.trim().length}`);   
}

// str.truespace();


// const user1={
//     username:"Vishal Jati",
//     password:"123hhgvg",
//     email:"vj@google.com"
// }
// const obj2={
//     city:"Kolkata",
// }

// Object.setPrototypeOf(user1,obj2);
// console.log(obj2);
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(Teacher.printme());
