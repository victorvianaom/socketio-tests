import express from "express"       //pra usar esses `import` eu tive que transformar esse arquivo
import http from "http"             //em um modulo pelo arquivo `package.json` com "type": "module"
import socketio from "socket.io"    //caso contrario deveria ter usado require()

const port = 5000

const app = express() //creates an Express application
const server = http.createServer(app)   // creates a server on my computer
                                        // 'server' listens for HTTP requests on a given port,
                                        // 'server' is now a Event Emitter also
const sockets = socketio(server) // 'sockets' tbm is um Event Emitter

app.use(express.static('public')) // faz a pasta `public` ser o foco do servidor

const dataBase = {}
var i=1

sockets.on('connection', (socket) => {
    console.log(`> Connected to socket ID: ${socket.id}`)

    socket.emit('setup', dataBase)

    socket.on('single-message', (socketData) => {
        console.log(`> Data received: ${socketData}`)
        dataBase[`data${i}`] = socketData
        i++

        socket.emit('all-messages', dataBase)
    })
 
})

server.listen(port, () => {
    console.log(`> Serving on port ${port}`)
})