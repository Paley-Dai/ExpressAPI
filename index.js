const mongoose = require('mongoose')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://webissabin:TkgDZMT2CoZPeMwR@cluster0.d2ioife.mongodb.net/?retryWrites=true&w=majority");
    console.log("MongoDB Connected.");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
  } 
  catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

connectDB()

app.use(express.json()); // This middleware parses JSON request bodies

app.get('/', (req, res) => {
    res.send('Hello, this is your Express API on Vercel!');
});

app.post("/async-bananas", (req, res) => {
    try {
        const numberPlate = req.body;
        console.log(numberPlate)
        res.send('Received the number plate data successfully');
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error');
    }
});
