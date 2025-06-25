//Method 1

fetch('https://api.github.com/users/vishaljati')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>
    {
        console.log(error)}
)

//Method 2

async function getusername() {
    try {
        const response = await fetch('https://api.github.com/users/vishaljati')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log('Error');
        
    }
}
getusername();