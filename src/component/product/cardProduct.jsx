import React from "react";
import Photo from "./photo";
import Price from "./price";
import Btn from "./button";
import { connect } from "react-redux";
import "./cards.scss";
import { getActionAddToBasket, getActionCountAdd } from "../../store/actionsCreator";

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
    let { image, price } = this.props.Product;

    return (
      <div className="cardsProduct">
        <Photo img={image} />
        <Price price={price} />
        <Btn productId={this.props.Product} cb={this.addToBasket} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    testStore: state.productList,
    basketCatalog: state.basket,
  }),
  (dispatch) => ({
    ActionAddToBasket: (item) => dispatch(getActionAddToBasket(item)),
  })
)(CardsProduct);
