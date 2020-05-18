const express=require('express');
const path=require('path');
const http=require('http');
const WebSocket=require("ws");

const app=express();
const server=http.createServer(app);
const wsServer=new WebSocket.Server({ server });

const setClients=new Set();

wsServer.on('connection', (socketConnection)=>{
    setClients.add(socketConnection);
    console.log('New client connected, total connections: ', setClients.size);

    socketConnection.on('message', (message)=>{
        setClients.forEach((oneClient)=>{
            oneClient.send(message);
        });
});
socketConnection.on('close',()=> {
    setClients.delete(socketConnection);
    console.log("Client disconnected, total connections: ", setClients.size);
});

});



app.use(express.static(path.resolve(__dirname,'../client')));

server.listen(3000,()=>{ console.log('listening on port 3000');});