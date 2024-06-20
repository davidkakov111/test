const express = require('express');
const bodyParser = require('body-parser');
const { VoiceResponse } = require('twilio').twiml;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

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

// If you have installed and set up Ngrok, simply run the following 
// command after starting the Node server to make it accessible from the internet.
// ngrok http 3000
