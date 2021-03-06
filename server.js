const express = require( 'express' );
const orm = require( './orm' );

const PORT = process.env.PORT || 8080;
const app  = express();

app.use( express.static('public'));
app.use( express.urlencoded({ extended: false }));


app.post("/api/burgerChoice", async function(req, res){
    const savedBurger = await orm.saveBurgerName(req.body);
    console.log(savedBurger);

    res.send("savedburger!!")

});


app.get("/api/burgerChoice", async function(req, res){
    const getBurger = await orm.getBurgerName();
    res.send(getBurger);

});

app.put("/api/burgerUpdate/:id", async function(req, res){
    console.log(req.params.id)
    const updateBurger = await orm.devouredBurger(req.params.id);

    res.send("updated burger!!")

});
app.get("/api/updatedBurger", async function(req, res){
    const getUpdated = await orm.getdevourededBurger();
    res.send(getUpdated)
});

app.listen( PORT, function(){
    console.log( `[eat-da-burger] RUNNING, http://localhost:${PORT}` );
});
