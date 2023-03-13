import React from "react";
import CardsProduct from "../product/cardProduct";
import Photo from "../product/photo";
import Price from "../product/price";
import Btn from "../product/button";
import { ACTIONS } from "../../store/store";
import { connect } from "react-redux";

function Basket(props) {
 let removeToBasket = (id)=>{

    props.ActionRemoveToBasket(id);
  };
  //использовать map set
  let listProduct = new Map();
  props.catalo.forEach(item => {
    listProduct.set(item.id, item) 
  });
  console.log("basket", props)
  return (
    <div className="basketList">
      {Array.isArray(props.basketId) ? (
        props.basketId.map((item) => 
        <>
        <Photo img={listProduct.get(item).image} />
        <Price price={listProduct.get(item).price} />
        <Btn productId={listProduct.get(item).id} cb={removeToBasket} />
        </>
        )
      ) : (
        <>{"basket null"}</>
      )}
    </div>
  );
}


export default connect(
  null,
  (dispatch) => ({
    //
    ActionRemoveToBasket: (id) =>
      dispatch({ type: ACTIONS.REMOVE_TO_BASKET, removeId: id }),
    
  })
)(Basket);