const donateDatabaseQuery = require('./donateDatabaseQuery.js')
let nickname
let query
let gettingDataDatabase
let donate

async function getPriceDonates(req, res){
    nickname = req.query.name
    query = `SELECT * FROM data_permissions WHERE username = '${nickname}' ORDER BY level_donate DESC;`
    gettingDataDatabase = new Promise((resolve, reject)=>{
        donateDatabaseQuery(resolve, reject, query)
    })
    donate = await gettingDataDatabase
    if (donate === '403er'){
        res.send('403er')
        res.status(403)
    }else{
        res.send(donate)
        res.status(200)
    }
}


module.exports = getPriceDonates