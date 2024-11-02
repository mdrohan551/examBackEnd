const express = require('express');
const app = express();
const router = require('./src/Router/api');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());

app.use(express.json({ limit: "50MB" }));
app.use(express.urlencoded({ limit: '50MB' }));

const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3000, // limit each IP to 3000 requests per windowMs
    message: "YOU HAVE EXCEEDED YOUR 3000 REQUESTS PER 15 MINUTE LIMIT."
});
app.use(limiter);

// API Routes
app.use("/api", router);


module.exports = app;
