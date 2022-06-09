const express = require('express')
const cors = require('cors')
const giveDonateProcess = require('./modules/giveDonateProcess.js')
const getOnlineServer = require('./modules/getOnlineServer.js')
const getPriceDonates = require('./modules/getPriceDonates.js')
const registrationProcess = require('./modules/registrationProcess.js')
const loginProcesses = require('./modules/loginProcesses.js')
const loginProcessesAuto = require('./modules/loginProcessesAuto.js')
const authMiddleware = require('./middleware/auth.middleware.js')





const PORT = process.env.PORT || 8080
const app = express()




app.use(cors());
app.use(express.json())


/* app.post('/api/registration', (req, res) => {
    registrationProcess(req, res)
}) */

app.post('/api/givedonateplayer', (req, res) => {
    giveDonateProcess(req, res)
})

app.get('/api/auth', authMiddleware,(req, res) => {
    loginProcessesAuto(req, res)
})

app.post('/api/login', (req, res) => {
    loginProcesses(req, res)
})

app.get('/api/getonline', (req, res) => {
    getOnlineServer(req, res)
})

app.get('/api/getprice', (req, res) => {
    getPriceDonates(req, res)
})

app.listen(PORT, ()=> {
    console.log(`Server start ${PORT}`)
})




