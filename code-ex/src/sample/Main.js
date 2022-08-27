import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Default Parent Value",
    };
  }

  changeData(newData) {
    this.setState({
      data: newData,
    });
  }

  render() {
    return (
      <div className="main">
        <h2>Parent Component: parent State: {this.state.data}</h2>
        <Child1
          changeDataHandler={this.changeData.bind(this)}
          name={this.state.data}
        />
        {/* <Child2 /> */}
      </div>
    );
  }
}

export default Main;
