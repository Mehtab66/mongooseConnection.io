const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

mongoose.connect('mongodb://127.0.0.1:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION DONE")
    })
    .catch(err => {
        console.log("OH NOOO !! ITS AN ERROR")
    })


app.get('/dog', (req, res) => {
    res.send("WOOF!")
})
app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})