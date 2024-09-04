import express from 'express';

const server = express();
const port = 5000;

server.get("/hello", (request, response)=>{
    response.send(200, {
        message:"Hello world!"
    });
});

server.get("/data", (request,response)=> {
    response.send(200, {
        name:"João",
        idade:25,
        course:"Sistemas para Internet"
    });
});

server.listen(port, ()=>{
    console.log(`Server listening on PORT ${port}`);
});