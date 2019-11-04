import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import Toggle from "./Toggle";
import Modal from "./Modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>I'm in a modal!</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
