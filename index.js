const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const auth = require("./src/routes/auth")
const favorite = require("./src/routes/favorite")
const ranking = require("./src/routes/ranking")
const register = require("./src/routes/register")

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/auth", auth)
app.use("/favorite", favorite)

app.use("/ranking", ranking)
app.use("/register", register)

app.listen(port, (err) => {
    if (err) {
        console.error(`Something bad just happened... ${err}`)
    }
    console.log(`Server is listening on ${port}`)
})


