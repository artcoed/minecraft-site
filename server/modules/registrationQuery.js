const mysql = require('mysql2')
const bcrypt = require('bcryptjs')
let conn
let query
let hashPassword

function registrationQuery(resolve, reject, username, password){
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "mine_donat",
        password: "",
    })

    conn.connect((err) => {
        if (err) {
            console.error("Ошибка: " + err)
            resolve('403')
        }else{
            console.log("Подключение к серверу MySQL успешно установлено")
            query = `SELECT * FROM users_server WHERE username = '${username}'`
            conn.query(query, async (err, result, field) =>{
                if (err){
                    console.error(`Ошибка: ${err}`)
                    resolve('403')
                }else{
                    result = JSON.stringify(result[0])
                    if (result === undefined){
                        console.log(`Игрок еще не зарегестрирован, начинаю регистрацию!`)
                        hashPassword = await bcrypt.hash(password, 10)
                        query = `INSERT users_server(username, password) VALUES ('${username}', '${hashPassword}')`
                        conn.query(query, (err, result, field) =>{
                            if (err){
                                console.error(`Ошибка: ${err}`)
                                resolve('403')
                            }else{
                                conn.close()
                                console.log('Пользователь был успешно создан!')
                                resolve('200')
                            }
                        })
                    }else{
                        conn.close()
                        console.log('Игрок с таким ником уже зарегестрирован!')
                        resolve('402')
                    }
                }
            })
        }

    })
}


module.exports = registrationQuery