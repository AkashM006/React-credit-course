import React from "react";
import "./Child1.css";

class Child1 extends React.Component {
  // state = {
  //   name: "Name",
  // };

  // handleClick = () => {
  //   this.setState({ name: new Date().toDateString() });
  // };

  // render() {
  //   return (
  //     <div className="child1">
  //       <h1>Hello {this.state.name} 👋</h1>
  //       <button onClick={this.handleClick}>Change Date</button>
  //     </div>
  //   );
  // }

  constructor(props) {
    super(props);
    this.state = {
      childValue: "Child default Value",
    };
  }

  changeHandler() {
    this.props.changeDataHandler("New Parent Value");
    this.setState({ childValue: "New Child Value" });
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  render() {
    return (
      <div>
        <h4>Child Component: Parent Value: {this.props.name}</h4>
        <h4>Child Component: Child Value: {this.state.childValue}</h4>
        <button onClick={this.changeHandler.bind(this)}>Change</button>
      </div>
    );
  }
}

export default Child1;
