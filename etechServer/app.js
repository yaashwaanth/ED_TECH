const express = require("express");
const course = require("./routes/courseRoutes.js");
const user = require("./routes/userRoutes.js");
const payments = require("./routes/paymentRoutes");
<<<<<<< HEAD
const {ErrorMiddleware} = require("./middleware/Error.js");
const cookieParser = require("cookie-parser");
=======
const others = require("./routes/otherRoutes")
const {ErrorMiddleware} = require("./middleware/Error.js");
const cookieParser = require("cookie-parser");
const cors = require("cors")
>>>>>>> 08f216d (complete website)
const app = express();

// using middlewares
app.use(express.json());  // req.body karna hai tho ye dono use karna padaga
app.use(express.urlencoded({   
    extended:true
}));

app.use(cookieParser());  // req.cookies ka liya use karna hai

// Importing and using routes
<<<<<<< HEAD

app.use("/api/v1",course);
app.use("/api/v1",user);
app.use("/api/v1",payments)
=======
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET","POST","PUT","DELETE"]
}))

// app.use(cors());
app.use("/api/v1",course);
app.use("/api/v1",user);
app.use("/api/v1",payments);
app.use("/api/v1",others);
>>>>>>> 08f216d (complete website)

app.use(ErrorMiddleware);

module.exports=app;