import React from "react";
import "./cards.scss";

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <img className="photo-product" src={this.props.img} />;
  }
}

export default Photo;
