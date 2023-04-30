const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// const io = socketio(server, {
//     cors: {
//         origin: '*',
//     }
// })

const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000','http://localhost:3500','https://8617-45-10-91-53.ngrok-free.app'],
};

app.use(cors(corsOption));

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

// const data = [
//     { x: 'START', y: Math.random() * (80 - 20 + 1) + 20 }
// ]



// io.on('connection', (socket) => {
//     console.log('connected')

    // setInterval(() => {
    //     if (data.length > 20) {
    //         data.reverse().pop()
    //         data.reverse()
    //     }
    //     data.push({ x: `${new Date().getMinutes()}:${new Date().getSeconds()}`, y: Math.random() * 100 })
    //     socket.emit('message', data)
    // }, 1000)
// })

let geo
  

app.post('/geo', async (req, res) => {
    geo = req.body

    console.log(req.body)

    res.send('Data received successfully' + JSON.stringify(req.body));
})

app.get('/test', (req, res) => {
    res.send('lol');
  });

