const express = require("express");
const axios = require('axios');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
app.set('view engine', 'ejs');
const { fifty, seventyfive, hundred, hundredfifty } = require('./database');

app.use(express.static(__dirname + '/public'));
app.post('/text', async (req, res) => {
    try {
        const { duration, words } = req.body;
        if (words == 50) {
            text = fifty[Math.floor(Math.random() * 12)];
        }
        if (words == 75) {
            text = seventyfive[Math.floor(Math.random() * 12)];
        }
        if (words == 100) {
            text = hundred[Math.floor(Math.random() * 12)];
        }
        if (words == 150) {
            text = hundredfifty[Math.floor(Math.random() * 6)];
        }
        if (words == 200) {
            text = hundred[Math.floor(Math.random() * 12)] + hundred[Math.floor(Math.random() * 12)];
        }

        // console.log(text);
        const data = {
            text: text,
            time: duration,
        };

        // Render the EJS template (target.ejs) and pass data to it
        res.render('typingtemplate', data);
    } catch (error) {
        console.error(error);
        res.send("Some error has occured!!")
    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})