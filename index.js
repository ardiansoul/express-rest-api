const express = require ("express")
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const puppyRouter = require('./routers/puppy')
// const bodyParser = express.bodyParser()

const bodyParser = require('body-parser')


// for access variabel inside .env
require('dotenv').config()

// tell express for use cors and body-parser

	

app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json({ limit: "10kb"}))
app.use(cors())
// app.use(bodyParser.raw())



// connect to database
const uri = process.env.DATABASE_URL_LOCAL

mongoose.connect(uri, {
	"useNewUrlParser": true,
	"useUnifiedTopology": true
})

const connection = mongoose.connection

connection.once('open', () => {
	console.log('connect to database')
})



app.use("/puppies", puppyRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))