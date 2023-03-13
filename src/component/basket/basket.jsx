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


  return (
    <div className="basketList">
      {Array.isArray(props.basketId) ? (
        props.basketId.map((item) =>{
/*           arr.filter(function(number) {
            return number > 0;
          }); */
          return (
        <>
        <Photo img={item.image} />
        <Price price={item.price} />
        <Btn productId={item.id} cb={removeToBasket} />
        </>)}
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