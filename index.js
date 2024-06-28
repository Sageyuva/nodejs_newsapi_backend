const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async (req, res) => {
    try {
        const news = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=34dafb44e329498e8f84249b893f125d')
        console.log(news.data)
        res.json(news.data) // Changed this line to properly send the JSON response
    } catch (error) {
        console.log("fetch failed")
        res.json({ message: "fetch failed" }) // Changed this line to send a JSON object
    }
})

// Activating port
app.listen(5000, () => {
    console.log("API SERVER IS ONLINE");
});
