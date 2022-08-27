import React, { Component } from "react";

class Get extends Component {
  constructor() {
    super();
    this.state = { isLoaded: false, users: null };
  }
  componentDidMount() {
    fetch(`https://gorest.co.in/public/v2/users`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          users: data,
        });
      });
  }
  render() {
    if (!this.state.isLoaded) {
      return <h1>Data is loading...</h1>;
    }
    return (
      <>
        {this.state.users.map((data) => {
          return (
            <div className="container" key={data.id}>
              <h3>{data.name}</h3>
              <p>{data.email}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Get;
