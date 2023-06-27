const express = require('express');
const PokemonModel = require('../models/pokemon');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello')
});

router.get('/pokemon', async (req, res) => {
    const list = await PokemonModel.find();
    res.send(list)
});

router.get('/pokemon/:id', async (req, res) => {
    try {
        const onePokemon = await PokemonModel.findById(req.params.id);
        res.send(onePokemon)
    }catch{
        res.status(400).send('error')
    }
});

router.post('/pokemon', async (req, res) => {
    try {
        const onePokemon = await PokemonModel.findById(req.params.id);
        res.send(onePokemon)
    }catch{
        res.status(400).send('error')
    }
});

router.delete('/pokemon/:id', async (req, res) =>  {
    try{
        await PokemonModel.findByIdAndDelete(req.params.id)
        res.send('deleted')
    }catch{
        res.status(400).send('error')
    }
})

router.delete('/pokemon/:id', async (req, res) =>  {
    try{
        await PokemonModel.findByIdAndDelete(req.params.id, req.body)
        res.send('updated')
    }catch{
        res.status(400).send('error')
    }
})

module.exports = router;