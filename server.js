import express from "express"       //pra usar esses `import` eu tive que transformar esse arquivo
import http from "http"             //em um modulo pelo arquivo `package.json` com "type": "module"
import socketio from "socket.io"    //caso contrario deveria ter usado require()

const app = express() //creates an Express application
const server = http.createServer(app)   // creates a server on my computer
                                        // 'server' listens for HTTP requests on a given port,
                                        // 'server' is now a Event Emitter also
const sockets = socketio(server) // 'sockets' tbm is um Event Emitter

app.use(express.static('public')); //faz a pasta `public` ser o foco do servidor






server.listen(3000)
