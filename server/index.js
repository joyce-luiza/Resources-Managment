const express = require("express");
const cors = require("cors");
const resources = require("./routes/resources");
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/resources", resources);

app.listen(4004, () => {
    console.log("Server has started on port 4004");
});


