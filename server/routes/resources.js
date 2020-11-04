const express = require("express");
const router = express.Router();

router
.route()
//create resource
.post(async (req, res) => {
    try {
        const {name, type, creation_date} = req.body;
        const newResource = await pool.query("INSERT INTO resources (name, type, creation_date) VALUES($1, $2, $3) RETURNING *",
        [name, type, creation_date]);
        res.json(newResource.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})
//get all resources
.get(async (req, res) =>{
    try {
        const allResources = await pool.query("SELECT * FROM RESOURCES");
        res.json(allResources.rows);
    } catch (err) {
        console.log(err.message);
    }
});

//get a resource
router
.route("/:id")
.get(async(req, res) =>{
    try {
        const {id} = req.params;
        const resource = await pool.query("SELECT * FROM resources WHERE resource_id = $1", [id]);
        res.json(resource.rows[0]);
    } catch (err) {
        console.log(err);
    }
})
//uptade a resource 
.put(async (req, res) =>{
    try {
        const {id} = req.params;
        const {name, type} = req.body;
        const updateResource = await pool.query("UPDATE resources SET name = $1, type = $2 WHERE resource_id = $3", [name, type, id]);
        res.json("Resource was updated");
    } catch (err) {
        console.log(err.message);
    }
})
//delete a resource
.delete(async (req, res) =>{
    try {
        const {id} = req.params;
        const deleteResource = await pool.query("DELETE FROM resources WHERE resource_id = $1", [id]);
        res.json("Resource was deleted");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;