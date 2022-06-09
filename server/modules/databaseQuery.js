const mysql = require('mysql2')
let conn

function databaseQuery(query, nickname, tovar, resolve, reject){
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "mine_donat",
        password: "",
    })

    conn.connect((err) => {
        if (err) {
            console.error("Ошибка: " + err.message)
            resolve('403')
        }else{
            console.log("Подключение к серверу MySQL успешно установлено")
            conn.query(query, (err, result, field) =>{
                if (err){
                    console.error(`Ошибка: ${err}`)
                    resolve('403')
                }else{
                    conn.close()
                    console.log(`"Игрок ${nickname} привелегия ${tovar}"`)
                    resolve('200')
                }
            })
        }

    })
}






module.exports = databaseQuery