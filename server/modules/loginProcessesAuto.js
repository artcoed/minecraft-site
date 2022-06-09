const loginAutoQuery = require('./loginAutoQuery.js')

let username
let password
let loginWaiting
let resultLogin

async function loginProcessesAuto(req, res){
    username = req.user.username
    loginWaiting = new Promise((resolve, reject) => {
        loginAutoQuery(resolve, reject, username, res)
    })
    resultLogin = await loginWaiting
    switch (resultLogin) {
        case '403':
            res.status(403).json({message: 'Ошибка подключения к базе данных'})
            break
        case '404':
            res.status(402).json({message: 'Ошибка входа!'})
            break
        case '401':
            res.status(401).json({message: 'Ошибка входа!'})
            break
        case '200':
            console.log('Успешный вход!')
            break
    }
}

module.exports = loginProcessesAuto