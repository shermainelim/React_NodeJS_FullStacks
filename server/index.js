const express = require("express"); //express dependency/middleware
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const sendEmail = require("./utils/sendEmail");
const dotenv = require("dotenv").config();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "loginsystem",
});

//register new staff
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const fullName = req.body.fullName;
  const email = req.body.email;

  //hash pw

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO staffs ( username, password, fullName, email) VALUES (?,?,?,?)",
      [username, hash, fullName, email],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result) {
          res.send(res.statusCode);
        }
      }
    );
  });
});

//staff login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM staffs WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            //send full name
            const name = result[0].fullName;
            const staffData = [name];

            res.send({ data: staffData, message: "Login Successful" });
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User not found" });
      }
    }
  );
});

//admin login
app.post("/loginAdmin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM admin WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        //send full name
        const name = result[0].fullName;

        const adminData = [name];

        res.send({ data: adminData, message: "Login Successful" });
      } else {
        res.send({ message: "User not found" });
      }
    }
  );
});

//Staff verify queue no and resident, checks if queue exist
app.post("/staffVerifyQueue", (req, res) => {
  const queueNo = req.body.queueNo;
  const uinfin = req.body.uinfin;
  const mobileNo = req.body.mobileNo;

  db.query(
    "SELECT * FROM residents WHERE queueNo = ? AND ufinLastFourDigit = ? AND mobileNo = ?",
    [queueNo, uinfin, mobileNo],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        //send full name
        const fullName = result[0].fullName;
        const address = result[0].address;
        const uinfin = result[0].ufin;
        const queueNo = result[0].queueNo;
        let queueExist = false;

        let completed = result[0]?.completed;

        if (completed === null) {
          completed = "";
        }

        if (queueNo !== null) {
          queueExist = true;
        }

        const residentQueueData = [
          fullName,
          address,
          uinfin,
          queueNo,
          queueExist,
          completed,
        ];

        res.send({
          data: residentQueueData,
          message: "Successful",
        });
      } else {
        res.send({ message: "Queue data does not exist" });
      }
    }
  );
});

// check for resident details
app.post("/verifyResident", (req, res) => {
  const uinfin = req.body.uinfin;
  const mobileNo = req.body.mobileNo;

  db.query(
    "SELECT * FROM residents WHERE ufinLastFourDigit = ? AND mobileNo = ?",
    [uinfin, mobileNo],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        //send full name
        const fullName = result[0].fullName;
        const address = result[0].address;
        const uinfin = result[0].ufin;
        const queueNo = result[0].queueNo;
        let queueExist = false;
        if (queueNo !== null) {
          queueExist = true;
        }

        const residentData = [fullName, address, uinfin, queueNo, queueExist];

        res.send({ data: residentData, message: "User found." });
      } else {
        res.send({ message: "User not found." });
      }
    }
  );
});

// staff complete issue voucher for resident
app.post("/issueVoucher", (req, res) => {
  const uinfin = req.body.uinfin;
  const mobileNo = req.body.mobileNo;
  const queueNo = req.body.queueNo;
  const staffFullName = req.body.staffFullName;

  const dateObject = new Date();
  const date = `0 ${dateObject.getDate()}`.slice(-2);
  const month = `0 ${dateObject.getMonth() + 1}`.slice(-2);
  const year = dateObject.getFullYear();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();
  let dateTimeStamp =
    `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`.toString();

  db.query(
    "UPDATE residents SET completed =? , processedByStaff=? , processedTimeStamp=? WHERE queueNo = ? AND ufinLastFourDigit = ? AND mobileNo = ?",
    ["True", staffFullName, dateTimeStamp, queueNo, uinfin, mobileNo],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result) {
        res.send({ data: "True", message: "Issue voucher completed." });
      } else {
        res.send({ message: "An error has occured. Please try again." });
      }
    }
  );
});

// add queue for resident
app.post("/addQueue", (req, res) => {
  //assuming vouchers quantity is about 10,000, then assign random queue number (range till 100,000) avoid same queue no.
  const newQueue = Math.floor(Math.random() * 100000) + 1;
  const uinfin = req.body.uinfin;
  const mobileNo = req.body.mobileNo;

  db.query(
    "UPDATE residents SET queueNo =? WHERE ufinLastFourDigit = ? AND mobileNo = ?",
    [newQueue, uinfin, mobileNo],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send({ data: newQueue, message: "Queue created successfully." });
      } else {
        res.send({ message: "An error has occured. Please try again." });
      }
    }
  );
});

app.post("/api/sendemail", async (req, res) => {
  const { email } = req.body;

  try {
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const subject = "Thank You Message From ChocolateLabs";
    const message = `
        <h3>Hello Customer</h3>
        <p>Thank for redeeming your chocolate ticket</p>
        <p>Enjoy</p>
    `;

    await sendEmail(subject, message, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
