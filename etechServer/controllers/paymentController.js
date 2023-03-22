const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../Model/User");
const ErrorHandler = require("../utils/errorHandler");
const instance = require("../server");


exports.buySubscription=catchAsyncErrors(async(req,res,next)=>{


    const user = await User.findById(req.user._id);

    if(user.role==='admin'){
        return next(new ErrorHandler("Admin can't buy subscription",400));
    }

    const plan_id = process.env.PLAN_ID || "plan_7wAosPWtrkhqZw"

    const subscription= await instance.subscriptions.create({
        plan_id: plan_id,
        customer_notify: 1,
        total_count: 12,
      });

      user.subscription.id = subscription.id;

      user.subscription.status=subscription.status;

      await user.save();

      res.status(201).json({
          success:true,
          subscriptionId:subscription.id
      })

})