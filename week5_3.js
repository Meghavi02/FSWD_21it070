const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.static('public'));

app.use(fileUpload());

app.post('/uploads', (req, res) => {
    let sampleFile = req.files.file1;
    let uploadPath = __dirname + '/uploads/' + sampleFile.name;

    sampleFile.mv(uploadPath, (err) => {
        if (err) {
            console.log("No files uploaded");
        }
        
        res.send("File uploaded successfully");
    });
});


app.get('/', (req, res) => {
    res.send('Hello');
});


app.listen(3000);
