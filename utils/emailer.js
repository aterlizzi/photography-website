const pool = require('./db');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();


const emailer = (req) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const newUser =  pool.query(`INSERT INTO contacts (full_name, email) VALUES ($1, $2)`, [name, email], (err, _) => {
        if(err){
            return console.error('Error executing query', err.stack)
        }
    })

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASS, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    // send email to the form submiter
    let options = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
    }
    // optionally choose the email depending on the subject filled out.
    switch(req.body.subject){
        case "Booking a Session": 
            options.text = `
            Hi ${name}!
            Thank you so much for reaching out to me. I would love to take your photos!
            I am available on XXXXXXXXXXXX and you can contact me at 540-642-6906.
            Looking forward to working with you,
            Fulmore`
            break;
        case "Question Inquiry":
            options.text = `
            Hi ${name}!
            I'll take a look at your question and reply as soon as I can!
            Best,
            Fulmore`
            break;
        case "Other Inquiry":
            options.text = `
            Hi ${name}!
            I'll take a look at your message and reply as soon as I can!
            Best,
            Fulmore`
            break;
        default:
            console.error('No subject listed');
            break;
    }
    transporter.sendMail(options, (err, info) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(info.response);
    });
    // send mail to me.
    const options2 = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_ADMIN,
        subject: subject + ' from ' + name,
        text: message
    }
    transporter.sendMail(options2, (err, info) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(info.response);
    });
}


module.exports = emailer;