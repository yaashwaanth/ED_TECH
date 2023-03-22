const app = require('./app');
const dotenv = require("dotenv");
const {connectDatabase} = require("./config/database.js");
const cloudinary = require("cloudinary");
const RazorPay = require("razorpay");

dotenv.config({path:"./config/config.env"})


// connecting to database
connectDatabase();

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_CLIENT_API ,
    api_secret:process.env.CLOUDINARY_CLIENT_SECRET
})

exports.instance = new RazorPay({
    key_id:"Your_Key_id",
    key_secret:"Your_key_secret",
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to the port:${process.env.PORT}`);
})