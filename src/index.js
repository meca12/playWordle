import { fromEvent } from "rxjs";

const letterRows = document.getElementsByClassName('letter-row'); 
const onkeyDown$ = fromEvent(document, 'keydown'); 

let letterIndex = 0; 
let letterRowindex = 0;

const insert = {
    next: (event) => {
    
        const presskey = event.key.toUpperCase();
        let letterBox = Array.from(letterRows)[letterRowindex].children[letterIndex];
        
        if (presskey.length === 1 && presskey.match(/[a-z]/i)) {
            letterBox.textContent = presskey;
            letterBox.classList.add("filled-letter");
            
            letterIndex++;
    

           
            
        }
        
   
    },
  
 
};


const unisert = {
    next:(event) => {
        const presskey = event.key.toUpperCase();
         let letterBox = Array.from(letterRows)[letterRowindex].children[letterIndex];
      
       if(presskey === "BACKSPACE")   {
           letterBox.textContent = '';
           letterBox.classList.remove("filled-letter");
           letterIndex--; 
         
          
              
               
         
         
        }
    }
}


onkeyDown$.subscribe(insert);
onkeyDown$.subscribe(unisert);



