var express = require("express");
var app = express();

var PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Our MERN server has started!")
})

app.listen(PORT, () => { console.log(`Server has started on ${PORT}`) });