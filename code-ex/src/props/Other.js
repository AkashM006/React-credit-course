import React from "react";

class Other extends React.Component {
  buttonHandler() {
    this.props.clickHandler();
  }

  render() {
    return (
      <div>
        <button onClick={this.buttonHandler.bind(this)}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Other;
