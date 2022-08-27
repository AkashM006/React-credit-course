import React from "react";
import Other from "./Other";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: 0,
      input2: 0,
      result: 0,
    };
  }

  input1Handler = (event) => {
    this.setState({
      input1: event.target.value,
    });
  };
  input2Handler = (event) => {
    this.setState({
      input2: event.target.value,
    });
  };
  addHandler = (event) => {
    this.setState({
      result: +this.state.input1 + +this.state.input2,
    });
  };
  subtractHandler = (event) => {
    this.setState({
      result: +this.state.input1 - +this.state.input2,
    });
  };
  multiplyHandler = (event) => {
    this.setState({
      result: +this.state.input1 * +this.state.input2,
    });
  };
  divideHandler = (event) => {
    this.setState({
      result: +this.state.input1 / +this.state.input2,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <input
          type="number"
          value={this.state.input1}
          onChange={this.input1Handler.bind(this)}
        />
        <br />
        <input
          type="number"
          value={this.state.input2}
          onChange={this.input2Handler.bind(this)}
        />
        <br />
        <Other name="Add" clickHandler={this.addHandler.bind(this)} />
        <Other name="Subtract" clickHandler={this.subtractHandler.bind(this)} />
        <Other name="Multiply" clickHandler={this.multiplyHandler.bind(this)} />
        <Other name="Divide" clickHandler={this.divideHandler.bind(this)} />
        <br />
        <strong>The result is: {this.state.result}</strong>
      </div>
    );
  }
}

export default Main;
