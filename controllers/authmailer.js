import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
const transporter = nodemailer.createTransport({
  service:'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

/* const mailOptions={
    from: {
        name:'Email Management',
        address:process.env.USER
    }, // sender address
    to: "alice@example.com, bob@example.com", // list of recipients
    subject: "Send email using nodemailer and gmail", // subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // HTML body
    
} */