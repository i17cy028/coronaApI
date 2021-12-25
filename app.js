const express = require("express");
const https = require("https");

const app = express();

app.get("/",function(req,res){
  const url = "https://data.covid19india.org/state_district_wise.json?Andhra Pradesh=districtData"
  https.get(url,function(response){
    console.log(response.statuscode);
  })

  res.send("Server is up and running.")
})






app.listen(3000,function(){
  console.log("server is running on port 3000");
})
