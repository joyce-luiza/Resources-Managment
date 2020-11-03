import React,{Fragment, useState} from "react";

const EditResource = ({resource}) => {
    
    const[name, setName] = useState(resource.name);
    const[type, setType] = useState(resource.type);

    const setDefaultValues = () => {
        setName(resource.name);
        setType(resource.type);
    }

    const updateResource = async (e) => {
        e.preventDefault();
        try {
            const body = {name, type};
            const response = await fetch(`http://localhost:4004/resources/${resource.resource_id}`, {
                method: "PUT",
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${resource.resource_id}`} data-backdrop="static" data-keyboard="false">
        Edit
        </button>

        <div class="modal" id={`id${resource.resource_id}`}>
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Edit Resource</h4>
                    <button type="button" class="close" data-dismiss="modal" onClick={() => setDefaultValues()}>&times;</button>
                </div>

                <div class="modal-body">
                    <form>
                    <div className="form-group">
                    <label for="name">Resource Name</label>
                    <input type="text" className="form-control" required value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <label for="type">Resource Type</label>
                    <select  required value={type} onChange={e => setType(e.target.value)}>
                        <option value="DB">DB</option>
                        <option value="API">API</option>
                        <option value="Fila">Fila</option>
                        <option value="Host Estático">Host Estático</option>
                    </select>
                    </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateResource(e)}>Edit</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDefaultValues()}>Close</button>
                </div>

                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default EditResource;