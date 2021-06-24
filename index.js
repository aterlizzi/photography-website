const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const bookings = require('./bookings/find-bookings');
const createUser = require('./bookings/create-user');
const createBooking = require('./bookings/create-booking');
const JSONbig = require('json-bigint');
const emailer = require('./utils/emailer');

const { body, validationResult } = require('express-validator');


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
app.get('/contact', (_, res) => {
    res.render('contact', { default: true });
});
app.get('/testimonials', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})
app.get('/booking', (_, res) => {
    res.sendFile(path.join(__dirname, 'client-booking/booking/build', 'index.html'))
})
app.get('/portfolio', (_, res) => {
    res.sendFile(path.join(__dirname, 'client-portfolio/build', 'index.html'))
})
app.get('/portfolio/portraits', (_, res) => {
    res.sendFile(path.join(__dirname, 'client-portfolio/build', 'index.html'))
})
app.get('/portfolio/graduation', (_, res) => {
    res.sendFile(path.join(__dirname, 'client-portfolio/build', 'index.html'))
})
app.get('/portfolio/sports', (_, res) => {
    res.sendFile(path.join(__dirname, 'client-portfolio/build', 'index.html'))
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
    emailer(req);
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
app.use(express.static(path.join(__dirname, 'client-portfolio/build'), {
    extensions: ['html', ''],
}))

// middleware
app.use(express.json());