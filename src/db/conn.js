const mongoose = require("mongoose");

//creating a database

mongoose.connect("mongodb+srv://sakshiAPI:sakshiKRUSHNA2546@sakshiapi.b0blor7.mongodb.net/wanaredynamic")
.then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})