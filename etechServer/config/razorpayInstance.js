const Razorypay = require('razorpay');
const dotenv = require("dotenv");
dotenv.config({path:"./config/config.env"})

const instance = new Razorypay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET
  })


module.exports = instance;
