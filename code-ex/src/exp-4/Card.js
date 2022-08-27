import React from "react";
import "./Card.css";

class Card extends React.Component {
  state = {
    name: "Viewing less",
    status: 0,
  };

  clickHandler = () => {
    if (this.state.status === 0) {
      this.setState({
        name: "Viewing More",
        status: 1,
      });
    } else {
      this.setState({
        name: "Viewing less",
        status: 0,
      });
    }
  };

  render() {
    return (
      <div className="card__container">
        <div className="card__img">
          <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="React logo" />
        </div>
        <div className="card__body">
          <h1>Title of the Card</h1>
          <p>This is a very long content inside the body of the card.</p>
          <h2>{this.state.name}</h2>
          {/* <div> */}
          <button className="card__btn" onClick={this.clickHandler}>
            View More
          </button>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Card;
