import React from "react";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const dateNow =
      String(today.getDate()).padStart(2, "0") +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getFullYear());
    const timeNow = today.toLocaleTimeString();
    this.state = {
      date: dateNow,
      time: timeNow,
    };
  }

  componentDidMount() {
    const today = new Date();
    const dateNow =
      String(today.getDate()).padStart(2, "0") +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getFullYear());
    const timeNow = today.toLocaleTimeString();
    this.setState({ date: dateNow, time: timeNow });
  }

  componentDidUpdate() {
    setTimeout(() => {
      const today = new Date();
      const dateNow =
        String(today.getDate()).padStart(2, "0") +
        "-" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(today.getFullYear());
      const timeNow = today.toLocaleTimeString();
      this.setState({ date: dateNow, time: timeNow });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>
          Date: <date>{this.state.date}</date>{" "}
        </h1>
        <h2>
          Time: <time>{this.state.time}</time>
        </h2>
      </div>
    );
  }
}

export default Main;
