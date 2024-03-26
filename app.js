const express = require("express")
const app = express()
const homeController = require("./controllers/home.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"))

app.get("/", homeController.getHome)

module.exports = app