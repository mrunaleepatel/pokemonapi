const mongoose = require('./connection');
const pokemonData = require('./seedData');
const PokemonModel = require('./pokemon');



mongoose.connection.on('open', async () => {
    const scrubbedData = pokemonData.map( v=> {
        return {
            id: v.id,
            name: v.name,
            img: v.img, 
            type: v.type,
            stats: v.stats
        }
    });

    //Delete all the pokemon records in the db.
    //we wanted the 'seeded' stated to be consistent so we delete everything to start from scratch
    //prior to adding on the scrubbed data
    await PokemonModel.deleteMany({});

    //using the scrubbed Data we will insert those records into the db
    await PokemonModel.create(scrubbedData);

    //because the "const mongoose = require('./connection')" line establishes a connection, 
    //we want to close out the connection AFTER all the data been added.
    mongoose.connection.close();

});


