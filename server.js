const express = require('express');
const body_parser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 2000;

const urlencodedparser = body_parser.urlencoded({ extended: false });

app.use(express.static('public'));

const server = app.listen(PORT, (err)=>{
    if(err){
        console.log(JSON.stringify(err, undefined, 2));
    }
    else{
        console.log(`Listening on port ${PORT}`);
    }
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});
app.get("/reiki", (req, res)=>{
    res.sendFile(__dirname + "/reiki.html")
});
app.get("/tarot", (req, res)=>{
    res.sendFile(__dirname + "/tarot.html")
});
app.get("/massage", (req, res)=>{
    res.sendFile(__dirname + "/massage.html")
});


// mailer

// reiki
app.post("/reiki/sent", urlencodedparser, (req, res)=>{
    console.log(req.body);

    let message = `
<h1>Reiki</h1>
<p>Name: ${req.body.name}</p>
<p>Email: ${req.body.email}</p>

<h3>Message</h3>
<p>${req.body.message}</p>

`;

    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        post: 587,
        secure: false,
        auth: {
            user: "myutopiaco@outlook.com",
            pass: "Bleazygirl1975##"
        },
        rejectUnauthorized: false
    });
    
    let mailOptions = {
        from: '"Reiki sender" <myutopiaco@outlook.com>',
        to: "myutopiaco@outlook.com",
        subject: "New Reiki Message",
        html: message
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return console.log(JSON.stringify(error, undefined, 2));
        }

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.sendFile(__dirname + "/reiki.html");
    });
});

// tarot

app.post("/tarot/sent", urlencodedparser, (req, res)=>{
    console.log(req.body);

    let message = `
<h1>Tarot</h1>
<p>Name: ${req.body.name}</p>
<p>Email: ${req.body.email}</p>

<h3>Message</h3>
<p>${req.body.message}</p>

`;

    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        post: 587,
        secure: false,
        auth: {
            user: "myutopiaco@outlook.com",
            pass: "Bleazygirl1975##"
        },
        rejectUnauthorized: false
    });
    
    let mailOptions = {
        from: '"Tarot sender" <myutopiaco@outlook.com>',
        to: "myutopiaco@outlook.com",
        subject: "New tarot Message",
        html: message
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return console.log(JSON.stringify(error, undefined, 2));
        }

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.sendFile(__dirname + "/tarot.html");
    });
});

// massage

app.post("/reiki/massage", urlencodedparser, (req, res)=>{
    console.log(req.body);

    let message = `
<h1>Massage</h1>
<p>Name: ${req.body.name}</p>
<p>Email: ${req.body.email}</p>

<h3>Message</h3>
<p>${req.body.message}</p>

`;

    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        post: 587,
        secure: false,
        auth: {
            user: "myutopiaco@outlook.com",
            pass: "Bleazygirl1975##"
        },
        rejectUnauthorized: false
    });
    
    let mailOptions = {
        from: '"Massage sender" <myutopiaco@outlook.com>',
        to: "myutopiaco@outlook.com",
        subject: "New Massage Message",
        html: message
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return console.log(JSON.stringify(error, undefined, 2));
        }

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.sendFile(__dirname + "/massage.html");
    });
});