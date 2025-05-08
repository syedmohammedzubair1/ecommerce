const express = require ("express");
const mongoose =require("mongoose");
const Database = require("./Database/dbconfig.js")
const app = express();
const PORT=8080
Database();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
