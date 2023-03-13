import React from "react";
import Photo from "./photo";
import Price from "./price";
import Btn from "./button";
import { ACTIONS } from "../../store/store";
import { connect } from "react-redux";
import "./cards.scss";

class CardsProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket(id) {
    this.props.ActionAddToBasket(id);
  }

  render() {
    let { image, price, id } = this.props.Product;

    return (
      <div className="cardsProduct">
        <Photo img={image} />
        <Price price={price} />
        <Btn productId={id} cb={this.addToBasket} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    testStore: state.productList,
  }),
  (dispatch) => ({
    //
    ActionAddToBasket: (item) =>
      dispatch({ type: ACTIONS.ADD_TO_BASKET, productId: item }),
  })
)(CardsProduct);
