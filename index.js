const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5173;

const URI = "mongodb+srv://webissabin:6DrqLND21bxwlreL@cluster0.d2ioife.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI, mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }))
.then(_result => app.listen(PORT))
.catch(err => console.log(err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (_req, res) => {
    res.send("Async Bananas");
})

app.post("/data", (req, res) => {
    try {
        const numberPlateData = req.body
    console.log(numberPlateData);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: "Error occurred while processing the request."});
    }
    
})

app.listen(PORT);

module.exports = app;