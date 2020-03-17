const express = require( 'express' );
const orm = require( './orm' );

const PORT = process.env.PORT || 8080;
const app  = express();

app.use( express.static('public'));
app.use( express.urlencoded({ extended: false }));

app.post("/api/choiceOfBurger", async function(req,res){
    const Savedburger = await orm.saveUserBurger(req.body);
    console.log(Savedburger);
    res.send("Saved !!")
});

app.listen( PORT, function(){
    console.log( `[burger] RUNNING, http://localhost:${PORT}` );
});
