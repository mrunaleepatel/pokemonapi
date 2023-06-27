require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.URL);

mongoose.connection
.on('open', () => console.log('connected to mongoose'))
.on('close', () => console.log('diconnected to mongoose'))
.on('error', (error) => console.log(error))

module.exports = mongoose;