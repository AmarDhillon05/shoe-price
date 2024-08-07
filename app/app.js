const express = require("express")
const axios = require("axios")

const api_link = "https://shoe-price-api.onrender.com/data"

const app = express()
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))


axios.get(api_link).then(res => {
    console.log(res.data)
})

app.get('/', (req, res) => {
    axios.get(api_link).then(api_res => {
        res.render("index", {data : JSON.stringify(api_res.data)})
    }).catch(err => {
        res.render("index", {data : {"Error" : err}})
    })
})



app.listen(5000, () => {
    console.log("Server listening on http://127.0.0.1:5000")
})
