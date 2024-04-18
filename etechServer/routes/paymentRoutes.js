const express = require("express");
<<<<<<< HEAD
const { buySubscription } = require("../controllers/paymentController");
=======
const { buySubscription, paymentVerification, getRazorPayKey, cancelSubscription } = require("../controllers/paymentController");
>>>>>>> 08f216d (complete website)
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

<<<<<<< HEAD
//but subscription
router.route("/subscribe").get(isAuthenticated,buySubscription);

=======
//buy subscription
router.route("/subscribe").get(isAuthenticated,buySubscription);

// verify payment and save reference in database...
router.route("/paymentVerification").post(isAuthenticated,paymentVerification);

// get razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

// cancel subscription
router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription);
>>>>>>> 08f216d (complete website)

module.exports=router;