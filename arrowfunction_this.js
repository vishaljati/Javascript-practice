let myobj={
    username:"Vishal",
    password:"123abc",
    welcomeMessage: function(){
        console.log(`Hi ${this.username}, Welcome to website`);
        console.log(this);
        
    }
}
myobj.welcomeMessage()
myobj.username="Dhoni";
myobj.welcomeMessage()

console.log(this);


const addNum = (num1,num2)=>{
    return num1+num2;
}
console.log(addNum(3,4));

const subNum =(num1,num2)=>(num1-num2) // Implicit return
console.log(`Substraction of 4 and 2 is:`, subNum(4,2));
