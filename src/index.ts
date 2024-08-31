import http from "http"
import app from "./app"

const server = http.createServer(app)

server.listen(1333,() => {
    console.log('server on');
    
})