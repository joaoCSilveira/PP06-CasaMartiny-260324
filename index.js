const app = require("./app.js")

const port = 3456

app.listen(port, ()=> {
    console.log("App rodando na porta: ", port)
})