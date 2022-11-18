const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./config/database');
const userRoutes = require('./routes/noticiaRoutes');

db.connect() ;

app.use(cors());
app.use(express.json());
app.use("/noticias", userRoutes);

module.exports = app;