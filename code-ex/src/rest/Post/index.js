import React, { Component } from "react";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gender: "male",
      email: "",
      status: "active",
    };
  }
  changeHandler(event) {
    const value = event.target.value;
    const field = event.target.name;
    const currentValue = { ...this.state };
    currentValue[field] = value;
    this.setState(currentValue);
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <>
        <h1>POST</h1>
        <form onSubmit={this.submitHandler}>
          <label>Name:</label>
          <input
            style={{ color: "black" }}
            type="text"
            name="name"
            onChange={this.changeHandler}
          />
          <br />
          <label>Gender:</label>
          <select
            name="gender"
            style={{ color: "black" }}
            onChange={this.changeHandler}
            onSelect={this.changeHandler}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </form>
      </>
    );
  }
}

export default Post;
