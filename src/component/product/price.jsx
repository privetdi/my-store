import React from "react";
import "./cards.scss";

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return  <a>{this.props.price}</a>
    
  }
}

export default Price;