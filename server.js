const express=require("express");
app.get("/", function(req,res){
    res.send("<h1> Hello world</h1>");
})
const bodyParser= require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({ extended:true}));

app.get("/", function(req, res)
{
    res.sendFile( -dirname+ "/index.html");
});
app.post("/", function(req,res){
    res.send("Thanks for posting the form")
});

app.post("/", function(req, res){
var n1= Number(req,body.num1);
var n2= Number(req,body.num2);
var result= n1+n2;
res.send("The answer is", + result);
});
app.get("/about", function(req, res){
    res.send("<h1>lilian kwamboka <h1><p>This is pretty hard to understand</p>")
});
app.get("/shapeAI", function(req, res){
    res.send("<h1>ShapeAI</h1><p>This is pretty</p>")
});

app.listen(3000,function(){
    console.log("Server has started on port 3000")
});