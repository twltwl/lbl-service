const app = require('./src/server')
const http = require('http')
const debug = require('debug')

const server = http.createServer(app)
server.listen(process.env.PORT)
server.on('listening', onListening)

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
  

function onListening() {
    const addr = server.address()
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
    debug('Listening on ' + bind)
}

process.on('unhandledRejection', (reason, p) => {
    //console.error('Unhandled Rejection at:', p, 'reason:', reason);
    console.error('Unhandled Rejection: ', p)
})