import React from "react";
import Photo from "../product/photo";
import Price from "../product/price";
import Btn from "../product/button";
import { connect } from "react-redux";
import Check from "./check";
import { getActionRemoveFromBasket } from "../../store/actionsCreator";

function Basket(props) {
  let removeFromBasket = (id) => {
    props.ActionRemoveFromBasket(id);
  };
  return (
    <>
      <Check />
      <div className="basketList">
        {Array.isArray(props.basketCatalog) &&
        Object.keys(props.basketCatalog).length > 0 ? (
          props.basketCatalog.map((item) => (
            <div className="basketItem">
              <Photo img={item.image} />
              <Price price={item.price} />
              <Btn productId={item.id} cb={removeFromBasket} />
            </div>
          ))
        ) : (
          <>basket null</>
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
    ActionRemoveFromBasket: (id) => dispatch(getActionRemoveFromBasket(id)),
  })
)(Basket);
