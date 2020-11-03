import React, {Fragment, useState} from "react";

const InputResource = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("Fila");
    const creation_date = new Date().toLocaleDateString();

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {name, type, creation_date};
            const response = await fetch("http://localhost:4004/resources", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location ="/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5">Resources Managment</h1>
            <form className="mt-5" onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label for="name">Resource Name</label>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label for="type">Resource Type</label>
                    <select className="form-control" value={type} required onChange={e => setType(e.target.value)}>
                        <option value="DB">DB</option>
                        <option value="API">API</option>
                        <option value="Fila">Fila</option>
                        <option value="Host Estático">Host Estático</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="text" readOnly={true} value={creation_date}></input>
                </div>            
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}

export default InputResource;