const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const pool = require('./db');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const bookings = require('./bookings/find-bookings');
const createUser = require('./bookings/create-user');
const createBooking = require('./bookings/create-booking');
const JSONbig = require('json-bigint');

const { body, validationResult } = require('express-validator');
const { allowedNodeEnvironmentFlags, getMaxListeners } = require('process');
const { text } = require('body-parser');

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}!`)
});


// body parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine
app.engine('handlebars', exphbs({
    defaultLayout: '',
}));
app.set('view engine', 'handlebars');

// ROUTES
app.get('/contact', (req, res) => {
    res.render('contact', { default: true });
});
app.get('/testimonials', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})
app.get('/booking', (req, res) => {
    res.sendFile(path.join(__dirname, 'client-booking/booking/build', 'index.html'))
})

// ROUTES for booking.

app.post('/booking', async (req, res) => {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const result = await bookings([startDate, endDate]);
    if (!result){
        console.log('null');
        res.send('null');
    } else if(result){
        res.json(JSONbig.parse(JSONbig.stringify(result)));
    }
})
app.post('/process-auth', async (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const result = await createUser({
        first_name: first_name,
        last_name: last_name,
        email: email
    })
    res.json(result);
})
app.post('/create-booking', async(req, res) => {
    const startAt = req.body.startAt;
    const locationId = req.body.locationId;
    const durationMinutes = req.body.durationMinutes;
    const serviceVariationId = req.body.serviceVariationId;
    const teamMemberId = req.body.teamMemberId;
    const serviceVariationVersion = req.body.serviceVariationVersion;
    const customerId = req.body.customerId;
    const result = await createBooking({
        customerId: customerId,
        startAt: startAt,
        locationId: locationId,
        durationMinutes: durationMinutes,
        serviceVariationId: serviceVariationId,
        teamMemberId: teamMemberId,
        serviceVariationVersion: serviceVariationVersion,
    })
    res.json(result);
})

// form submission post request -- make user & send email automatically.
app.post('/contact/sent', body('email').isEmail().normalizeEmail(), body('name').not().isEmpty().trim().escape(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const newUser =  pool.query(`INSERT INTO contacts (full_name, email) VALUES ($1, $2)`, [name, email], (err, result) => {
        if(err){
            return console.error('Error executing query', err.stack)
        }
    })

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'austyn.gusikowski@ethereal.email', // generated ethereal user
            pass: 'URFcgU5SXbXWfvX93Z', // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    // send email to the form submiter
    let options = {
        from: "austyn.gusikowski@ethereal.email",
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
        from: "austyn.gusikowski@ethereal.email",
        to: "acterlizzi@hotmail.com",
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
    res.render('contact', { msg: `Message sent! I'll be following up soon.`, default: false});
}

)




// set a static folder
app.use(express.static(path.join(__dirname, 'public/html'), {
    extensions: ['html', ''],
}));
app.use(express.static(path.join(__dirname, 'client/build'), {
    extensions: ['html', ''],
}))
app.use(express.static(path.join(__dirname, 'client-booking/booking/build'), {
    extensions: ['html', ''],
}))

// middleware
app.use(express.json());


