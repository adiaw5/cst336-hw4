
const express = require("express");
const app = express();



//console.log(`Employee: ${firstName}`);



app.engine('html',require('ejs').renderFile);

//Creating the root route 

app.use(express.static("public"));

// route

app.get("/", function(req, res){  
  const faker = require("faker");
  let firstName = faker.name.firstName();
  res.render("index.ejs", {fakeUsername:firstName}); 
});

app.get("/out-of-band", function(req, res){  
  res.render("out-of-band.html"); 
});

app.get("/push", function(req, res){  
  res.render("push.html"); 
});

app.get("/smartcard", function(req, res){  
  res.render("smartcard.html"); 
});

// server 
app.listen(process.env.PORT, process.env.IP, function(){  
   console.log("Server is now running");
})