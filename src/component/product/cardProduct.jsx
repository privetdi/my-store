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
    //проверяем пустая ли корзина, проверяем наличие одинаковых id, добавляем +1 если данный товар уже есть в корзине
    if (this.props.basketCatalog.length > 0) {
      if (this.props.basketCatalog.some((element) => element.id === id.id)) {
        this.props.CountAdd(id);
      } else {
        this.props.ActionAddToBasket(id);
      }
    } else {
      this.props.ActionAddToBasket(id);
    }
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
    //
    ActionAddToBasket: (item) => dispatch({ type: ACTIONS.ADD_TO_BASKET, productItem: item }),
    CountAdd: (item) => dispatch({ type: ACTIONS.COUNT_ADD, product: item }),
  })
)(CardsProduct);
