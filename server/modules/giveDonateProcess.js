const databaseQuery = require('./databaseQuery.js')
const rconQuery = require('./rconQuery.js')


let price_donate_bd = 0
let zapros = {}
let command = ''
let level_donate = 0
let query = ''
let queryDatabaseResult = ''
let gettingResultQueryDatabase
let gettingResultQueryRcon
let queryRconResult

async function giveDonateProcess(req, res){
    //Обнуление переменных, во избежание ошибок
    queryRconResult = ''
    queryDatabaseResult = ''
    query = ''
    price_donate_bd = 0
    command = ''
    level_donate = 0
    zapros = {
        tovar: req.body.donate,
        nickname: req.body.name,
    }
    if (zapros.nickname){
        if(zapros.nickname.length < 3){
            console.error('Недопустимый никнейм!')
            res.status(403).json({message: 'Недопустимый никнейм!'})
            return
        }

    }else{
        console.error('Недопустимый никнейм!')
        res.status(403).json({message: 'Недопустимый никнейм!'})
        return
    }
    // Получение команды для выдачи доната
    switch (zapros.tovar) {
        case 'Опка':
            command = 'op'
            level_donate = 3
            price_donate_bd = 500
            break
        case 'Админ':
            command = 'admin'
            level_donate = 2
            price_donate_bd = 300
            break
        case 'Вип':
            command = 'vip'
            level_donate = 1
            price_donate_bd = 100
            break
        default:
            command = ''
            level_donate = 0
            price_donate_bd = 0
            break
    }
    if (command === ''){
        console.error('Неверная команда!')
        res.status(404).json({message: 'Неверно указана привелегия!'})
        return
    }

    //Подключение к БД и запрос в нее
    query =`INSERT data_permissions(username, donate, level_donate, price_donat) VALUES ('${zapros.nickname}', '${zapros.tovar}', '${level_donate}', '${price_donate_bd}');`
    gettingResultQueryDatabase = new Promise((resolve, reject) => {
        databaseQuery(query, zapros.nickname, zapros.tovar, resolve, reject, 'ЗАПИСЫВАЮ')
    })
    queryDatabaseResult = await gettingResultQueryDatabase
    //Проверка ошибок при подключении, результат resolve
    if (queryDatabaseResult === '403'){
        errorConnect(res, 'Соединение с базой данных не удалось!')
        return
    }
    //Подключение к rcon сервера и выдача привелегии игроку
    gettingResultQueryRcon = new Promise((resolve, reject) => {
        rconQuery(resolve, reject, command, zapros.nickname)
    })
    queryRconResult = await gettingResultQueryRcon
    if (queryRconResult === '403'){
        console.log('Соединение с rcon сервером не удалось, удалю данные игрока из базы данных')
        //Подключение к БД и повторный запрос в нее, для удаления данных
        query =`DELETE FROM data_permissions WHERE username = '${zapros.nickname}' AND donate = '${zapros.tovar}';`
        gettingResultQueryDatabase = new Promise((resolve, reject) => {
            databaseQuery(query, zapros.nickname, zapros.tovar, resolve, reject, 'УДАЛЯЮ')
        })
        queryDatabaseResult = await gettingResultQueryDatabase
        //Проверка ошибок при подключении, результат resolve
        if (queryDatabaseResult === '403'){
            errorConnect(res, 'Соединение с базой данных не удалось! Не удалил привелегию')
            return
        }else{
            errorConnect(res, 'Соединение с rcon не удалось! Удалил привелегию игрока из базы данных')
            return
        }
    }else{
        console.log('Выдаю привелегию, все успешно!')
        res.status(200).json({message: 'Выдаю привелегию, все успешно!'})
        return
    }

}

function errorConnect(res, message){
    console.log(message)
    res.status(403).json({message: message})
}



module.exports = giveDonateProcess