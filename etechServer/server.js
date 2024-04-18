const app = require('./app');
const dotenv = require("dotenv");
const {connectDatabase} = require("./config/database.js");
const cloudinary = require("cloudinary");
<<<<<<< HEAD
const RazorPay = require("razorpay");

dotenv.config({path:"./config/config.env"})


=======
const nodeCron = require("node-cron")
const Stats = require("./Model/Stats.js");
const Razorypay = require('razorpay');
dotenv.config({path:"./config/config.env"})



>>>>>>> 08f216d (complete website)
// connecting to database
connectDatabase();

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_CLIENT_API ,
    api_secret:process.env.CLOUDINARY_CLIENT_SECRET
})

<<<<<<< HEAD
exports.instance = new RazorPay({
    key_id:"Your_Key_id",
    key_secret:"Your_key_secret",
=======
// razorypay instance

const instance = new Razorypay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET
  })



// create stats every month
nodeCron.schedule("0 0 0 1 * *",async()=>{ // every month 
  try{
    await Stats.create();

  }catch(error){
    console.log(error);
  }
>>>>>>> 08f216d (complete website)
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to the port:${process.env.PORT}`);
<<<<<<< HEAD
})
=======
})



module.exports = instance
>>>>>>> 08f216d (complete website)
