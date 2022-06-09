const util = require('minecraft-server-util')
let gettingStatusServer
let statusServer
let nowOnlinePlayers

async function getOnlineServer(req, res){
    try {
        gettingStatusServer = util.status('localhost', { port: 25565, enableSRV: true, timeout: 5000, protocolVersion: 47 })
        statusServer = await gettingStatusServer
        nowOnlinePlayers = JSON.stringify(statusServer.onlinePlayers)
        console.log('Текущий онлайн: ' + nowOnlinePlayers)
        res.status(200).json({nowOnlinePlayers: nowOnlinePlayers})
    } catch(e){
        nowOnlinePlayers = 0
        console.error(e);
        res.status(200).json({nowOnlinePlayers: nowOnlinePlayers})
    }
}


module.exports = getOnlineServer