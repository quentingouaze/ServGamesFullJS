const express=require('express');
const path=require('path');
const http=require('http');

const app=express();
const server=http.createServer(app);

app.use(express.static(path.resolve(__dirname,'../client')));

server.listen(3000,()=>{ console.log('listening on port 3000');});