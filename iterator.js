
 let myarr=[2,1,32,10,3,99]
 for (const iterator of myarr) {
    if(iterator>20)
        console.log(iterator);
 }
 
 
 const map1 = new Map();
 map1.set('IN',"India");
 map1.set('USA',"United of America");
 map1.set('UK',"United Kingdom");

//  console.log(map1);
 
const coding = ["js","ruby","java","c++","c","py"]
coding.forEach(
    function (val1,index,Array) {
        ( console.log(val1,index,Array))
    }
)

const playerDetails = [
    {
        playerName:"Virat Kohli",
        avgRunRate:70
    },
    {
        playerName:"MS Dhoni",
        avgRunRate:60
    },
    {
        playerName:"Sourav Ganguly",
        avgRunRate:70.55
    },
    {
        playerName:"Rohit Sharma",
        avgRunRate:67.88
    }

]

// playerDetails.forEach((item)=>{
//     // console.log(`Player Name is ${item.playerName} and average run rate is ${item.avgRunRate}`);
    
// })
const newarray =[1,2,3,4,5,6,7,8,9,10]
const newNum1= newarray.filter((num)=>(num>=4))
// console.log(newNum1);

// const newNum2 =newarray.map((num)=>(num+10))
// console.log(newNum2);

const newNum3 =newarray
               .map((num)=>(num*10))
               .map((num)=>(num+1))
               .filter((num)=>(num>=50))
    //   console.log(newNum3);
    
      
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook =books.filter((book)=>(book.genre==="Science" && book.publish>=2000))
//   console.log(userbook);
  
  //reduce()
  const price=[
    {courseName:"js course",
     coursePrice: 1999
    },
    {courseName:"python course",
     coursePrice: 3999
    },
    {courseName:"c++ course",
     coursePrice: 2999
    },
    {courseName:"c course",
     coursePrice: 999
    }
    
  ]

  const TotalPrice = price.reduce((acc,item)=>acc+item.coursePrice,0)
  console.log(TotalPrice);
  