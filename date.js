let mydate = new Date("04-23-2025")
// console.log(mydate.toLocaleString());
let newdate = Date.now()
console.log(newdate);
console.log(mydate.getFullYear());
console.log(Math.floor(Date.now()/1000));

new Date().toLocaleString('default',{
    weekday:"long",
    month:"narrow"
})
console.log(Date());


