import React from "react";
import "./Main.css";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://api.github.com/users/akashm006/repos")
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            loaded: true,
            data: data,
          });
        });
    }, 10000);
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <h2>The data is loading! Please wait</h2>
        </div>
      );
    }
    return (
      <div className="top">
        <h1>All Repositories({this.state.data.length})</h1>
        {this.state.data.map((data) => {
          return (
            <div className="container" key={data.id}>
              <h3>{data.full_name}</h3>
              <p>{data.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Api;
