const loginQuery = require('./loginQuery.js')

let username
let password
let loginWaiting
let resultLogin

async function loginProcesses(req, res){
    username = req.body.username
    password = req.body.password
    loginWaiting = new Promise((resolve, reject) => {
        loginQuery(resolve, reject, username, password, res)
    })
    resultLogin = await loginWaiting
    switch (resultLogin) {
        case '403':
            res.status(403).json({message: 'Ошибка подключения к базе данных'})
            break
        case '404':
            res.status(402).json({message: 'Пользователь не зарегестрирован!'})
            break
        case '401':
            res.status(401).json({message: 'Пароль не верный!'})
            break
        case '200':
            console.log('Успешная регистрация!')
            break
    }
}

module.exports = loginProcesses