require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors = require('cors')
const morgan = require('morgan')
// const path = require('path')
const indexRoute = require('./src/routes/index')

app.use(cors())
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(express.json())
app.use(morgan('dev'))

// Main API
app.use('/api', indexRoute)

// app.use('/v1/uploads', express.static(path.join(__dirname, './uploads')))

app.use('*', (req, res) => res.json({ msg: 'Not URL Found' }))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
