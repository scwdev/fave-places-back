require( "dotenv" ).config();

const mongoose = require( "mongoose" );

const MONGODB_URI =  process.env.MONGODB_URI

const config = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect( MONGODB_URI, config );

mongoose.connection
    .on( "open", () => console.log( "MONGO CONNECTION IS OPEN" ))
    .on( "close", () => console.log( "MONGO CONNECTION IS CLOSED" ))
    .on( "ERROR", () => console.log( "MONGO CONNECTION ERROR \n**********************\n", error ));

module.exports = mongoose;