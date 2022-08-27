import React, { Component } from "react";
import TextField from "./TextField";
import "./Main.css";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isValid: false,
      touched: false,
      msg: "",
    };
    this.nameRef = React.createRef();
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  nameValidator(name) {
    // name length must be atleast 3 and should not contain any characters other then space and dot
    if (name.length < 3)
      return { success: false, msg: "Name must be atleast 3 characters long!" };
    const pattern = /^[a-zA-Z. ]+$/;
    if (!pattern.test(name)) {
      return {
        success: false,
        msg: "Name can have only alphabets, . and space",
      };
    }

    return { success: true, msg: "Validation Passed!" };
  }

  ageValidator(age) {
    if (age < 0) return { success: false, msg: "Age must always be positive" };
    if (age < 18)
      return { success: false, msg: "You must be older then 18 to validate" };

    return { success: true, msg: "Validation Passed!" };
  }

  formValidator(errFlag) {
    let msg = "";
    if (errFlag === true) msg = "All validations passed!";
    else msg = "Please check all the fields";
    this.setState({
      isValid: errFlag,
      msg: msg,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    if (!this.state.isValid) {
      this.setState({
        msg: "Fields are not validated correctly, please check again!",
      });
    } else {
      this.setState({
        isDisabled: true,
        touched: true,
        msg: "All validations passed!",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Validation</h1>
        <form onSubmit={this.submitHandler.bind(this)}>
          {this.state.touched && (
            <p
              className={`form__text__container ${
                this.state.isValid ? "success" : "err"
              }`}
            >
              {this.state.msg}
            </p>
          )}
          <TextField
            type="text"
            init=""
            name="name"
            validator={this.nameValidator.bind(this)}
            formValidator={this.formValidator.bind(this)}
            isDisabled={false}
            refVar={this.nameRef}
          />
          <TextField
            type="number"
            init="0"
            name="age"
            validator={this.ageValidator.bind(this)}
            formValidator={this.formValidator.bind(this)}
            isDisabled={false}
          />
          <button
            disabled={!this.state.isValid}
            style={{ color: "black" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
