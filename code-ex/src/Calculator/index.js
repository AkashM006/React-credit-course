import React, { Component } from "react";
import Button from "./Button";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0,
      result: 0,
      text: "Result",
    };
  }
  render() {
    return (
      <div
        style={{
          border: "2px solid lightgray",
          borderRadius: "5px",
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1rem",
          margin: "0 auto",
          gap: "0.5rem",
        }}
      >
        <h1>Calculator</h1>
        <h3>A: </h3>
        <input
          name="varA"
          value={this.state.a}
          style={{ color: "black" }}
          onChange={(event) => {
            this.setState({ a: event.target.value });
          }}
        />
        {/* <br /> */}
        <h3>B: </h3>
        <input
          name="varB"
          value={this.state.b}
          style={{ color: "black" }}
          onChange={(event) => {
            this.setState({ b: event.target.value });
          }}
        />
        {/* <br />
        <br /> */}
        <Button
          title="Add"
          clickHandler={() =>
            this.setState({
              result: new Intl.NumberFormat("en-IN").format(
                +this.state.a + +this.state.b
              ),
              text:
                new Intl.NumberFormat("en-IN").format(+this.state.a) +
                "+" +
                new Intl.NumberFormat("en-IN").format(+this.state.b),
            })
          }
        />
        <Button
          title="Subtract"
          clickHandler={() =>
            this.setState({
              result: new Intl.NumberFormat("en-IN").format(
                +this.state.a - +this.state.b
              ),
              text:
                new Intl.NumberFormat("en-IN").format(+this.state.a) +
                "-" +
                new Intl.NumberFormat("en-IN").format(+this.state.b),
            })
          }
        />
        <Button
          title="Multiply"
          clickHandler={() =>
            this.setState({
              result: new Intl.NumberFormat("en-IN").format(
                +this.state.a * +this.state.b
              ),
              text:
                new Intl.NumberFormat("en-IN").format(+this.state.a) +
                "*" +
                new Intl.NumberFormat("en-IN").format(+this.state.b),
            })
          }
        />
        <Button
          title="Divide"
          clickHandler={() =>
            this.setState({
              result: new Intl.NumberFormat("en-IN").format(
                +this.state.a / +this.state.b
              ),
              text:
                new Intl.NumberFormat("en-IN").format(+this.state.a) +
                "/" +
                new Intl.NumberFormat("en-IN").format(+this.state.b),
            })
          }
        />
        <br />
        <h2>
          {this.state.text}= {this.state.result}
        </h2>
      </div>
    );
  }
}

export default Calculator;
