const express = require("express");
const cors = require("cors");
const pool = require("./db");
const resources = require("./routes/resources");

const app = express();
 
//middleware
app.use(cors());
app.use("/resources", resources);
app.use(express.json());

app.listen(4004, () => {
    console.log("Server has started on port 4004");
});

//routes

