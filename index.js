const express = require('express')
const app = express()
const consign = require('consign')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

app.use(express.static(path.join(__dirname, 'react-ui/build')))

app.use(bodyParser.json())
app.use(cors())

consign()
    .include('./api')
    .then('./config/Routes.js')
    .into(app)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/react-ui/build/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log('Listening to port ' + port))