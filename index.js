const mongoose = require('mongoose')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

mongoose.connect('mongodb+srv://siddharthaghimire:cngMbMfeIvm2avR6@cluster0.vij5fs8.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Connected to mongodb')
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })



app.get('/', (req, res) => {
    res.send('Hello, this is your Express API on Vercel!');
});


