const mongoose = require('mongoose')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://siddharthaghimire:I1Qc3uueefutQfUD@ac-9pvrbjr-shard-00-00.f3ey1v6.mongodb.net:27017,ac-9pvrbjr-shard-00-01.f3ey1v6.mongodb.net:27017,ac-9pvrbjr-shard-00-02.f3ey1v6.mongodb.net:27017/?ssl=true&replicaSet=atlas-xxleoa-shard-0&authSource=admin&retryWrites=true&w=majority',
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


