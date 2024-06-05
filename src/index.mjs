import express, { request, response } from "express";

const app = express();

const PORT =  process.env.PORT ||3000;

app.get("/",(request, response) =>{
response.send("Hello divinee");
});

app.get("/api/users",(request, response) =>{
    response.send([
        
        {id: 1, username:"anson" ,displayName:"anson"},
        {id: 2, username:"Gimmy" ,displayName:"Lord"},
        {id: 3, username:"Jack" ,displayName:"Jans"},
    ])
})
app.listen (PORT, ()=>{
    console.log(`listening on ${PORT}`);
});