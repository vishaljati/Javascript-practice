const form = document.querySelector('.container')
form.addEventListener('submit',function(event){
    event.preventDefault();
   
    const height = document.querySelector('#height').value;
    console.log(typeof height);
    
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#results')
    if (height<0 || height===''||height===0)
    {
        result.innerHTML="<span>Please Enter a Valid Height</span>"
        
    }
    else if (weight<0||weight===''||weight===0) {
    result.innerHTML="<span>Please Enter a Valid Weight</span>"
    }  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi<18.5){
        result.innerHTML=`<span> <b>Your BMI is : ${bmi} <br> You are Underweight</b></span>`
    }
    else if (18.5<=bmi && bmi <=24.9) {
        result.innerHTML=`<span> <b>Your BMI is : ${bmi} <br> Your weight is Healthy</b></span>`
    }
    else if (bmi>24.9) {
        result.innerHTML=`<span> <b>Your BMI is : ${bmi} <br> You are Overweight</b></span>`
    }
     
    else{
        result.innerHTML="<p>Please Enter Valid input</p>"
    }
 }

})