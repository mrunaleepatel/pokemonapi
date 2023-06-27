require('dotenv').config();
const express = require('express');
const pokemonRoutes = require('./controllers/pokemonRoutes');

const app = express();

app.use(pokemonRoutes);

const PORT = process.env.PORT;
app.listen(
    process.env.PORT, () => 
    console.log(`listening to port ${process.env.PORT}`)
);