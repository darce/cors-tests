require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3333
app.use(cors())
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (request, response) => {
    response.send('<h1>Server</h1>')
})

app.get('/api/traffic', (request, response) => {
    response.json({ message: 'test traffic' })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})