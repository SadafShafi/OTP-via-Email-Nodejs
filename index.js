// require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');


const passwordReset = require("./routes/passwordReset");
const data = require("./Models/DumData");

const app = express();

app.use(bodyParser());
app.use("/passwordreset", passwordReset);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));


/*

* here we'll have password and email hardcoded
* in password reset we take email and send the email
* we send the OTP via email
* we get the otp via an API called otpapi
* We check and compare our OTP
*

*/
