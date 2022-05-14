require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const mediRoutes = require("./routes/medicines");
const mediRead = require("./routes/read");
const mediDelete = require("./routes/delete");
const mediEdit = require("./routes/editmedi");
const userEdit = require("./routes/useredit");
// const mediEditn = require("./routes/editmedin");
const cookieParser = require('cookie-parser')
const Medi = require("./models/medi");
const cron = require('node-cron');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: <>,
    pass: <>
  }
});

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
// app.use(cors({credentials:true,origin:'http://localhost:3000',    allowedHeaders: ['Content-Type', 'Authorization'],
// }));

app.use(cookieParser());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/medicines", mediRoutes);
app.use("/api/mediRead", mediRead);
app.use("/api/delete", mediDelete);
app.use("/api/editmedi/", mediEdit);
app.use("/api/edituserdet/", userEdit);

var date = new Date();


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));


cron.schedule('*/5 * * * *', async function () {
    console.log('---------------------');
    console.log('Running Cron Job');
    var date = new Date()
    // var day = date.getDate();
    // var month = date.getMonth() + 1;
    // var year = date.getFullYear();
    // var today = year + "-" + month + "-" + day;
    // console.log(today)
    const medicineTime = await Medi.find({reminderStatus:"Pending"}).sort({ 'time': 1 });
    for (let i = 0; i < medicineTime.length; i++) {
      if (Number(medicineTime[i].medicineTime.split(":")[0]) === date.getHours() && Number(medicineTime[i].medicineTime.split(":")[1])-date.getMinutes()<= 5 && Number(medicineTime[i].medicineTime.split(":")[1])-date.getMinutes() >= 0) {
        
        console.log(`Before update ${medicineTime[i]}`);
        var mailOptions = {
          from: '"<> <no-reply@<>.com>',
          to: 'kaanub9@gmail.com',
          subject: 'MEDICINE REMINDER',
          text: `Reminder For Taking Medicine Scheduled at " + medicineTime[i].medicineTime `,
          html:  "<p>Hey Dear, It's time to take the medicine <b><i>" + medicineTime[i].medicineName +" .</i></b></p><br><br><p>Regards,</p><h3>MyMeds<br>We Care For Your Health!</h3>"
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        
      
      }
    }
  });