require('dotenv').config({});
const express = require("express");
const app = express();
const cors = require('cors')
const mainRoutes = require("./src/routers");
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", mainRoutes);
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server Is running on port 3000");
});