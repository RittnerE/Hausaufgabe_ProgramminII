const liste = require("./public/liste");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));
app.listen(3000, function () {
    console.log("Listing Application listening localhost on port 3000");
});

