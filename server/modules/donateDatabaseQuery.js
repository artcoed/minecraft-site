const mysql = require('mysql2')
let conn


function donateDatabaseQuery(resolve, reject, query){
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "mine_donat",
        password: "",
    })

    conn.connect((err) => {
        if (err) {
            console.error("Ошибка: " + err.message)
            resolve('403er')
        }else{
            console.log("Подключение к серверу MySQL успешно установлено")
            conn.query(query, (err, result, field) =>{
                if (err){
                    console.error(`Ошибка: ${err}`)
                    resolve('403er')
                }else{
                    result = JSON.stringify(result[0])
                    if (result === undefined){
                        console.log(`Донат игрока: 0`)
                        conn.close()
                        resolve(JSON.stringify(0))
                        return
                    }else{
                        result = JSON.parse(result)
                        console.log(`Донат игрока: ${result.price_donat}`)
                        conn.close()
                        resolve(JSON.stringify(result.price_donat))
                        return
                    }

                }
            })
        }

    })
}


module.exports = donateDatabaseQuery