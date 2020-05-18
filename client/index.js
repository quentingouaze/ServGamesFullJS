
window.onload=()=>{
const socketConnection=new WebSocket('ws://www.localhost:3000/');
socketConnection.onopen=(connectionEvent)=>{
    console.log('websocket connection opened', connectionEvent);
};
socketConnection.onmessage = (messageObject) => {
    const buttonClicked= document.getElementById(messageObject.data);
    if (buttonClicked.innerHTML==='-'){
        buttonClicked.innerHTML="O";
        buttonClicked.disabled=true;
    }
};
socketConnection.onerror=(error)=> {
    console.log('socket error:', error);
};


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