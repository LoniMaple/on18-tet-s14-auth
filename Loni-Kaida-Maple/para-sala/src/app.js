const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv-safe").config();

const db = require("./config/database");
const userRoutes = require("./routes/userRoutes");
console.log("iniciando variaveis");



app.use(cors());
console.log("iniciando cors");
app.use(express.json());
console.log("iniciando express");
app.use("/users", userRoutes);

console.log("Conectando ao banco de dados");
db.connect();

let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let date = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
let systemTime = time + " - " + date;

let printFigure1 = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠙⣄⠀⠀⣀⡀⠤⠤⠤⠤⠤⠄⢀⡀⠀⣰⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠈⠳⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢱⠇⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡔⠻⣄⣀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠃⠤⢰⠁⠳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡌⠀⠀⠂⢔⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⢡⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⠁⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣶⠶⠾⣧⠀⠈⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⠀⠀⢀⣤⣥⣤⣽⣄⣄⠀⠀⠀⠀⠀⠀⡰⢻⣿⣿⠀⠀⠸⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⠀⠀⢈⠀⠀⣿⣿⣏⠉⠂⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⡀⠅⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠄⠀⢿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠈⡻⠋⢀⠐⠀⡐⠀⡟⢆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⢄⠘⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢁⡸⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡇⠀⠀⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⢠⡾⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣡⠀⠀⠘⢦⠀⠀⠀⠀⠀⠀⠠⣄⠔⠒⠚⠁⠀⠀⠀⠀⠀⡜⠒⠙⠑⢄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡰⠁⠀⠀⠐⢮⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡜⠀⠀⠀⠀⠀⡁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⠁⠀⠀⠀⠐⠻⡀⠙⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠞⢹⠁⠀⠀⠀⠀⢴⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⢃⠀⠀⠀⠉⠳⣶⣦⣤⣶⣶⣿⡏⠀⠀⢜⠀⠀⠀⠀⠀⠀⠱⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡎⠀⠀⠀⠀⡴⠃⠀⠀⠀⠀⠀⣿⣿⣿⡿⠋⢸⠁⠀⠀⠀⠑⡀⠄⠀⠀⠀⢠⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡸⠀⠀⠀⠀⠈⢡⠀⠀⠀⠀⡀⣰⣿⠿⠋⠀⠀⠸⡇⠀⠀⠀⠘⠇⠀⠀⠀⠀⠁⢱⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠣⡀⠀⠀⢀⠴⠏⠙⠋⠻⢯⣛⠋⠁⠀⠀⠀⠀⠀⠳⢦⣄⡀⠀⠑⡄⠀⠀⠀⣠⠎⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡕⢠⠔⠁⠀⠀⠀⠀⠀⠀⠙⠳⣤⡀⠀⠀⠀⠀⠀⢀⣈⡉⡿⠾⢤⡀⠀⠀⠉⡂⠀⠀⠀⠀⠀
⠀⠀⠀⣀⡴⠋⠁⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠈⠹⠶⠦⠔⠒⠚⠉⠉⠂⠀⠀⠀⠉⢷⡀⣴⣥⠀⠀⠀⠀⠀
⠀⣠⠞⠉⠀⠀⠀⠀⠀⠀⠂⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⢸⡾⡊⠣⢄⡀⠀⠀⠀
⠞⠁⠀⠀⠀⠀⢀⡔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⡀⠸⡇⠑⠄⡀⠠⠉⠀⠀
`;




console.log("");
console.log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸");
console.log('\x1b[31m%s\x1b[0m', printFigure1);
console.log('\x1b[33m%s\x1b[0m', systemTime);

app.get("/", (req, res)=>{
    res.status(200).send("Nya (OωO) 🍁🐼🍁");
})



module.exports = app, systemTime;