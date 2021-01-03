const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const mkdirp = require('mkdirp');
const nodemailer = require("nodemailer");

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Read Gmail credentials from credentials.json.
// This file is not available publicly.
const credentials = JSON.parse(fs.readFileSync('server/credentials.json', 'utf8'));
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: credentials.email,
        pass: credentials.password
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Periodically check data to see if any emails need to be sent
const secs = 15;
setInterval(function() {
    const fileData = readFileData();
    var didUpdate = false;
    console.log("Searching through file_data.json.");

    // Iterate through all entries - see which ones are due for email
    const today = new Date();
    for (var i = 0; i < fileData.nextEmptyKey; i++) {
        const index = i.toString()
        if (!fileData[index].wasSent) {
            const date = new Date(fileData[index].date);
            if (today > date) {
                // Send email
                const mailOptions = {
                    from: credentials.email,
                    to: fileData[index].email,
                    subject: 'Dear Future Self - you have a letter',
                    text: `You created a time capsule using Dear Future Self - here is your message!
                    \n\n ${fileData[index].message}`
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        // Prevent email from being sent again
                        fileData[index].wasSent = true;
                        saveFileData(fileData);
                    }
                });
            }
        }
    }
}, secs * 1000);

// Read and parse file_data.json
function readFileData() {
    try {
        const data = fs.readFileSync('server/file_data.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Stringify and save file_data.json
function saveFileData(data) {
    try {
        const stringData = JSON.stringify(data, null, 4);
        fs.writeFileSync('server/file_data.json', stringData);
    } catch (err) {
        console.error(err);
    }
}

// Handle request for uploading file
function handleUpload(req, res, dir) {
    // Get object pointing to storage
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, dir)
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    });

    // Get upload function
    const upload = multer({storage: storage}).array('file');

    // Upload the file
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    });
}

// Handle a submit request, which takes in files,
// text, date, email, etc.
app.post('/submit',function(req, res) {
    console.log(req.body.files);

    // Read file_data.json
    const fileData = readFileData();
    const key = fileData.nextEmptyKey;

    // Create new directory
    const dir = __dirname + '/file_storage/' + key.toString()
    mkdirp.sync(dir);

    // Upload files to new directory
    handleUpload(req, res, dir);

    // Extract UTC time and date from the date string
    const dateStr = req.body.date;
    const dateObj = new Date(dateStr);

    // Update file_data.json
    fileData[key.toString()] = {
        "message": req.body.message,
        "email": req.body.email,
        "date": req.body.date,
        "wasSent": false,
        "secretKey": null
    };
    fileData.nextEmptyKey = key + 1;
    saveFileData(fileData);

    res.send("Data upload success!");
});

//const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});