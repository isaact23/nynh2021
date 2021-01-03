const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const mkdirp = require('mkdirp');

app.use(cors())

// Periodically check data to see if any emails need to be sent
//setInterval(SendEmails, 1000);

// Read and parse file_data.json
function readData() {
    try {
        const data = fs.readFileSync('server/file_data.json', 'utf8');
        const parsedData = JSON.parse(data);
        return parsedData;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Stringify and save file_data.json
function saveData(data) {
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
    console.log(req);

    console.log("Received call to submit data");
    // Read file_data.json
    const fileData = readData();
    const key = fileData.nextEmptyKey;
    console.log(key);

    // Create new directory
    const dir = __dirname + '/file_storage/' + key.toString()
    mkdirp.sync(dir);
    console.log("Directory created!");

    // Upload files to new directory
    handleUpload(req, res, dir);

    // Update file_data.json
    fileData[key.toString()] = {
        "message": req.config.data.message,
        "date": req.config.data.date,
        "email": req.config.data.email,
        "wasReturned": false,
        "secretKey": null
    };
    fileData.nextEmptyKey = key + 1;
    saveData(fileData);

    res.send("Data upload success!");
});

//const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});