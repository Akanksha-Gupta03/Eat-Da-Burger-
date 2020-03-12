const express = require( 'express' );
const orm = require( './orm' );

const PORT = process.env.PORT || 8080;
const app  = express();

app.use( express.static('public'));
app.use( express.urlencoded({ extended: false }));

app.listen( PORT, function(){
    console.log( `[burger] RUNNING, http://localhost:${PORT}` );
});
