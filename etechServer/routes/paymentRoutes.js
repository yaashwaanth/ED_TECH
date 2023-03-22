const express = require("express");
const { buySubscription } = require("../controllers/paymentController");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

//but subscription
router.route("/subscribe").get(isAuthenticated,buySubscription);


module.exports=router;