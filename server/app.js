const express = require('express');
const https = require('https');
const cors = require('cors');
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const apiKey='';
var city='delhi';
app.get("/getData",function(req,res){
    var url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";
    https.get(url,function(Response){
        Response.on('data',function(data){
            res.json([JSON.parse(data)]);  
        });
    });
});
app.post("/get",function(req,res){
    city=req.body.city;
});
app.listen(9000,function(){
    console.log("server started litening on port 9000");
});
