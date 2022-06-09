const util = require('minecraft-server-util')
const client = new util.RCON('localhost',
    {port: 25575, enableSRV: true, timeout: 5000, password: 'qwer4321'})

async function rconQuery(resolve, reject, command, nickname){

    try {
        await client.connect()
        client.run(`${command} ${nickname}`)
        resolve('200')
    } catch (e) {
        console.log(e)
        resolve('403')
    }
}
client.on('output', (message) => {
    console.log(message)
    client.close()
})

module.exports = rconQuery