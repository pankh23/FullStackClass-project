// const express = require("express");
// const fs = require("fs");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const USERS_FILE = "./users.json";
// let otps = {}; // Store OTPs temporarily

// // Send OTP API
// app.post("/send-email", async (req, res) => {
//   const { email } = req.body;
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   otps[email] = otp; // Save OTP temporarily

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // Use STARTTLS
//     auth: {
//       user: "pankhurikhurana23@gmail.com",
//       pass: "cvbbudppzxkxsxmr", // App password
//     },
//     tls: {
//       forceIPv4: true, // Force IPv4 usage
//     },
//   });
  

//   const mailOptions = {
//     from: "pankhurikhurana23@gmail.com",
//     to: email,
//     subject: "Your OTP Code",
//     text: `Your OTP code is: ${otp}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send("OTP sent successfully.");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send("Failed to send OTP.");
//   }
// });

// // Verify OTP and Register User
// // server.js

// app.post("/verify-code", (req, res) => {
//   const { email, code, name, phone, gender, address, password } = req.body;

//   if (parseInt(code) === otps[email]) {
//     delete otps[email]; // Clear OTP after successful verification

//     let users = [];
//     if (fs.existsSync(USERS_FILE)) {
//       users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
//     }

//     const newUser = { name, email, phone, gender, age, dob, address, password, verified: true };
//     users.push(newUser);

//     fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
//     res.status(200).send("OTP verified successfully.");
//   } else {
//     res.status(400).send("Invalid verification code. Please try again.");
//   }
// });



// // Fetch all users for the dashboard
// app.get("/users", (req, res) => {
//   try {
//     const users = fs.existsSync(USERS_FILE)
//       ? JSON.parse(fs.readFileSync(USERS_FILE, "utf8"))
//       : [];
//     res.status(200).json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).send("Failed to fetch users.");
//   }
// });


// // server.js

// app.post("/api/login", (req, res) => {
//   const { emailOrPhone, password } = req.body;

//   let users = [];
//   if (fs.existsSync(USERS_FILE)) {
//     users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
//   }

//   const user = users.find(user => (user.email === emailOrPhone || user.phone === emailOrPhone) && user.password === password);

//   if (user) {
//     res.status(200).send({ success: true });
//   } else {
//     res.status(401).send({ success: false });
//   }
// });

// app.listen(4000, () => console.log("Server running on port 4000"));


const express = require("express");
const fs = require("fs");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors());

const USERS_FILE = "./users.json";
let otps = {}; // Store OTPs temporarily

// Send OTP API
app.post("/send-email", async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);
  otps[email] = otp; // Save OTP temporarily

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pankhurikhurana23@gmail.com",
      pass: "cvbbudppzxkxsxmr",
    },
  });

  const mailOptions = {
    from: "pankhurikhurana23@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("OTP sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send OTP.");
  }
});

// Verify OTP and Register User
app.post("/verify-code", (req, res) => {
  const { email, code, name, phone, gender, age, dob, address, password } = req.body;

  if (parseInt(code) === otps[email]) {
    delete otps[email]; // Clear OTP after successful verification

    let users = [];
    if (fs.existsSync(USERS_FILE)) {
      users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
    }

    const newUser = { name, email, phone, gender, age, dob, address, password, verified: true };
    users.push(newUser);

    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    res.status(200).send("OTP verified successfully.");
  } else {
    res.status(400).send("Invalid verification code. Please try again.");
  }
});

// Fetch all users for the dashboard
app.get("/users", (req, res) => {
  try {
    const users = fs.existsSync(USERS_FILE)
      ? JSON.parse(fs.readFileSync(USERS_FILE, "utf8"))
      : [];
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Failed to fetch users.");
  }
});

// Login User
app.post("/api/login", (req, res) => {
  const { emailOrPhone, password } = req.body;

  let users = [];
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  }

  const user = users.find(user => (user.email === emailOrPhone || user.phone === emailOrPhone) && user.password === password);

  if (user) {
    res.status(200).send({ success: true });
  } else {
    res.status(401).send({ success: false });
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));
