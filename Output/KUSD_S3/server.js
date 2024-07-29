const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 8000;

const csvFilePath = path.join(__dirname, 'data.csv');

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { input1, input2, address } = req.body;
    const mappedAddress = (address === 'a') ? '0x0000' : '1x1111'; // Mapping a and b to actual addresses
    const csvLine = `${new Date().toISOString()},${mappedAddress},${input1},${input2}\n`;

    fs.appendFile(csvFilePath, csvLine, (err) => {
        if (err) {
            console.error('Error writing to CSV file', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send('Content saved successfully');
    });
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
