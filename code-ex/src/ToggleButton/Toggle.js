import React, { Component } from "react";
import "./Toggle.css";

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Toggle Button: {this.state.isActive ? <>On</> : <>Off</>}</h1>
        <label class="switch">
          <input
            type="checkbox"
            onChange={() => this.setState({ isActive: !this.state.isActive })}
          />
          <span class="slider round"></span>
          <br />
        </label>
        {this.state.isActive && (
          <center>
            <h2 className="toggle__content">
              You have enabled the toggle button. This is a secret only you can
              see, do not share!
            </h2>
          </center>
        )}
      </div>
    );
  }
}

export default Toggle;
