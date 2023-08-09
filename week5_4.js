const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;


app.use(bodyParser.json());


const adminEmail = 'your email';
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your email',
        pass: 'your password'
    }
});


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;


    const mailOptions = {
        from: email,
        to: adminEmail,
        subject: `New Contact Form Submission from ${name}`,
        text: message
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Error sending email' });
        }
        console.log('Email sent:', info.response);
        res.json({ message: 'Email sent successfully' });
    });
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
