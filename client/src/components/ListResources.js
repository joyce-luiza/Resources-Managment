import React, { Fragment, useEffect, useState } from "react";

import EditResource from "./EditResource";

const ListResources = () => {

    const [resources, setResources] = useState([]);

    const deleteResource = async(id) =>{
        try {
            const deleteResource = await fetch(`http://localhost:4004/resources/${id}`, {
                method: "DELETE"
            });
            
            setResources(resources.filter(resource => resource.resource_id !== id));

        } catch (err) {
            console.error(err.message);
        }
    }

    const getResources = async () =>{
        try {
            const response = await fetch("http://localhost:4004/resources");
            const jsonData = await response.json();
            setResources(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getResources();
    }, []);

    return(
        <Fragment>
              <table >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {resources.map(resource => (
                        <tr key={resource.resource_id}>
                            <td>{resource.name}</td>
                            <td>{resource.type}</td>
                            {console.log(resource.creation_date)}
                            <td>{`${new Date(resource.creation_date).toLocaleDateString()}`}</td>
                            <td><EditResource resource={resource}></EditResource></td>
                            <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteResource(resource.resource_id)}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListResources;