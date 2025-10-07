require('dotenv').config()
const http = require('http')

function requestController(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Servidor funcionando correctamente 🚀')
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
module.exports = server