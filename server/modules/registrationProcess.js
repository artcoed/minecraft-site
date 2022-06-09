const registrationQuery = require('./registrationQuery.js')

let username
let password
let loginWaiting
let resultLogin

async function registrationProcess(req, res){
    username = req.body.username
    password = req.body.password
    if (username === undefined || password === undefined){
        console.log('Недопустимая длинна введенных данных!')
        return  res.status(403).json({message: 'Недопустимая длинна введенных данных!'})
    }
    loginWaiting = new Promise((resolve, reject) => {
        registrationQuery(resolve, reject, username, password)
    })
    resultLogin = await loginWaiting
    switch (resultLogin) {
        case '403':
            res.status(403).json({message: 'Ошибка подключения к базе данных'})
            break
        case '402':
            res.status(402).json({message: 'Игрок с таким ником уже зарегестрирован!'})
            break
        case '200':
            res.status(200).json({message: 'Пользователь был успешно создан!'})
            break
    }
}


module.exports = registrationProcess