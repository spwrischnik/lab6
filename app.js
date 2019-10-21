const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res)
{
   res.render("index.html"); 
});
app.get("/mercury", function(req, res)
{
    res.send("Mercury web page");
});
app.get("/venus", function(req, res)
{
    res.send("Venus web page");
});

//server listener
app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("express is running");
});

