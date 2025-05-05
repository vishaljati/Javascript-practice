const buttons= document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
    addEventListener('click',function(event){
        // console.log(event);
      if (event.target.id==='red')
      {
        this.document.body.style.backgroundColor=event.target.id;
      }
      if (event.target.id==='green')
        {
          this.document.body.style.backgroundColor=event.target.id;
        }
        if (event.target.id==='blue')
            {
              this.document.body.style.backgroundColor=event.target.id;
            }
        if (event.target.id==='yellow')
        {
             this.document.body.style.backgroundColor=event.target.id;
        }
        if (event.target.id==='black')
         {
            this.document.body.style.backgroundColor=event.target.id;
        }
        if (event.target.id==='white')
        {
            this.document.body.style.backgroundColor=event.target.id;
         }
    })
})