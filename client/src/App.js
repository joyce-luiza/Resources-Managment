import React, { Fragment } from "react";
import './App.css';

//components
import InputResource from "./components/InputResource";
import ListResources from "./components/ListResources";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputResource></InputResource>
        <ListResources></ListResources>
      </div>
    </Fragment>
  );
}

export default App;
