import React from "react";
import CardsProduct from "../product/cardProduct";
import Photo from "../product/photo";
import Price from "../product/price";
import Btn from "../product/button";
import { ACTIONS } from "../../store/store";
import { connect } from "react-redux";
import Check from "./check";

function Basket(props) {
  let removeToBasket = (id) => {
    props.ActionRemoveToBasket(id);
  };
  console.log("basketlist", props.basketCatalog);
  return (
    <>
      <Check />
      <div className="basketList">
        {Array.isArray(props.basketCatalog) ? (
          props.basketCatalog.map((item) => (
            <div className="basketItem">
              <Photo img={item.image} />
              <Price price={item.price} />
              <Btn productId={item.id} cb={removeToBasket} />
            </div>
          ))
        ) : (
          <>{"basket null"}</>
        )}
      </div>
    </>
  );
}

export default connect(
  (state) => ({
    basketCatalog: state.basket,
  }),
  (dispatch) => ({
    //
    ActionRemoveToBasket: (id) =>
      dispatch({ type: ACTIONS.REMOVE_TO_BASKET, removeId: id }),
  })
)(Basket);
