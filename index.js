const express = require('express')


const app = express();



app.get('/', (req, res) => {
    res.send("Server response on / route")
})





app.get('/test', (req, res) => {
    let arr = [
        {
            id: 17,
            name: "muxammed",
            age: 20
        },
        {
            id: 17,
            name: "muxammed",
            age: 20
        },
        {
            id: 17,
            name: "muxammed",
            age: 20
        }
    ]
    res.json(arr)
})



app.listen(3000, () => {
    console.log("Server started on 3000")
})