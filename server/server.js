const express = require("express")
const cors = require("cors")
const axios = require('axios')
const app = express()

app.use(cors())
app.use(express.json())



app.listen(4000,console.log("Server running on 4000"))


// app.get('/pokemon/:name', (req,res) => {
//     let pokeInfo;
//     const { name } = req.params
//     axios
//         .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
//         .then(response => {
//             pokeInfo = response.data
//             console.log(pokeInfo)
//             res.status(200).send(pokeInfo)
//             return
//         })
//         .catch(err => console.log(err))
        
// })