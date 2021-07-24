require('dotenv/config');
const cors = require('cors');
const express = require('express');
const { resolve } = require('path');

const home = require('./controller/home')

const app = express();
const port = process.env.PORT || 3000;

app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(express.urlencoded({ extended: false }))

app.get('/ping', (req, res) => {
    return res.status(200).json({ message: 'Return is ok' });
})
app.get('/', home.index)
app.post('/', home.store)


app.listen(port, '0.0.0.0');
console.log('server listening on port', port);