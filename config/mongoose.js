const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://aniketmujbaile1:aniketmujbaile1@cluster0.zmoocmp.mongodb.net/?retryWrites=true&w=majority`);

// Code for using the cloud mongodb atlas 
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;