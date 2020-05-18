
window.onload=()=>{
 const collectionOfButtons=document.querySelectorAll('button');
 let xTurn=true;
 collectionOfButtons.forEach((buttonElement)=>{
     buttonElement.addEventListener('click', (event)=> {
         event.target.innerHTML=xTurn ? 'X' : 'O';
         event.target.disabled=true;
         xTurn=!xTurn;
     });
 });
};