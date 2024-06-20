const express = require('express');
const bodyParser = require('body-parser');
const { VoiceResponse } = require('twilio').twiml;
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const mobileNumbers = [40770714073];

app.post('/voice', (req, res) => {
    const response = new VoiceResponse();
    const dial = response.dial();

    mobileNumbers.forEach(number => {
        dial.number(number);
    });

    res.type('text/xml');
    res.send(response.toString());
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
