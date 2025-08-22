const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/auth')
const housingRoutes = require('./routes/housing')
const shopRoutes = require('./routes/shops')
const maidRoutes = require('./routes/maids')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(cors())
  server.use(express.json())

  server.use('/api/auth', authRoutes)
  server.use('/api/housing', housingRoutes)
  server.use('/api/shops', shopRoutes)
  server.use('/api/maids', maidRoutes)

  server.get('*', (req, res) => handle(req, res))

  const PORT = process.env.PORT || 3000
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bachelor_solution'

  mongoose.connect(MONGO_URI)
    .then(() => {
      server.listen(PORT, () => console.log(`Server running on ${PORT}`))
    })
    .catch(err => console.error(err))
})
