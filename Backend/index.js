const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
const app = express()
app.use(express.json())


const port = 3000

//Available Routes
app.get('/api/auth', require('./routes/auth'))
app.get('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})