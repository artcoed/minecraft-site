const mysql = require('mysql2')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
let conn
let query
let isPassValid
let token

function loginQuery(resolve, reject, username, password, res){
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "minelog",
        password: "",
    })

    conn.connect((err) => {
        if (err) {
            console.error("Ошибка: " + err)
            resolve('403')
        }else{
            console.log("Подключение к серверу MySQL успешно установлено")
            query = `SELECT * FROM authme WHERE realname = '${username}'`
            conn.query(query, async (err, result, field) =>{
                if (err){
                    console.error(`Ошибка: ${err}`)
                    resolve('403')
                }else{
                    conn.close()
                    result = JSON.stringify(result[0])
                    if (result === undefined){
                        console.log('Пользователь не зарегестрирован!')
                        resolve('404')
                    }else{
                        result = JSON.parse(result)
                        isPassValid = bcrypt.compareSync(password, result.password)
                        if(!isPassValid){
                            console.log('Пароль не верный!')
                            resolve('401')
                        }else{
                            token = jwt.sign({username: result.realname, date_registration: result.regdate}, config.get("secretKey"), {expiresIn: "72h"})
                            res.status(200).json({
                                token,
                                user: {
                                    username: result.realname,
                                    date_registration: result.regdate
                                }
                            })
                            resolve('200')
                        }
                    }
                }
            })
        }

    })
}




module.exports = loginQuery