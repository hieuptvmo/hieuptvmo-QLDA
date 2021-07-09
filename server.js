require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const postRoute = require('./routers/post')

// Import routes
const peopleRouter = require('./routers/people')
const customerRouter = require('./routers/router_customer')
const techRouter = require('./routers/router_tech')
const typeRouter = require('./routers/router_type')
const unitRouter = require('./routers/router_unit')

// Connect to DB
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Middlewares
app.use(express.json())

// Route Middlewares
app.use('/people', peopleRouter)
app.use('/posts', postRoute)
app.use('/customer', customerRouter)
app.use('/tech', techRouter)
app.use('/type', typeRouter)
app.use('/unit', unitRouter)

app.listen(3000, () => console.log('Server started'))