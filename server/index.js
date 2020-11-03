const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
 
//middleware
app.use(cors());
app.use(express.json());

app.listen(4004, () => {
    console.log("Server has started on port 4004");
});

//routes

//create resource
app.post("/resources", async (req, res) => {
    try {
        const {name, type, creation_date} = req.body;
        const newResource = await pool.query("INSERT INTO resources (name, type, creation_date) VALUES($1, $2, $3) RETURNING *",
        [name, type, creation_date]);
        res.json(newResource.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

//get all resources
app.get("/resources", async (req, res) =>{
    try {
        const allResources = await pool.query("SELECT * FROM RESOURCES");
        res.json(allResources.rows);
    } catch (err) {
        console.log(err.message);
    }
});

//get a resource
app.get("/resources/:id", async(req, res) =>{
    try {
        const {id} = req.params;
        const resource = await pool.query("SELECT * FROM resources WHERE resource_id = $1", [id]);
        res.json(resource.rows[0]);
    } catch (err) {
        console.log(err);
    }
});

//uptade a resource 
app.put("/resources/:id", async (req, res) =>{
    try {
        const {id} = req.params;
        const {name, type} = req.body;
        const updateResource = await pool.query("UPDATE resources SET name = $1, type = $2 WHERE resource_id = $3", [name, type, id]);
        res.json("Resource was updated");
    } catch (err) {
        console.log(err.message);
    }
});

//delete a resource
app.delete("/resources/:id", async (req, res) =>{
    try {
        const {id} = req.params;
        const deleteResource = await pool.query("DELETE FROM resources WHERE resource_id = $1", [id]);
        res.json("Resource was deleted");
    } catch (err) {
        console.log(err.message);
    }
});