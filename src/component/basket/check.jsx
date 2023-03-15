import React from "react";
import { ACTIONS } from "../../store/store";
import { connect } from "react-redux";

function Check(props) {

  return (
    <div className="checkList">
        <a>sum</a>
        <a>quantity</a>
        
    </div>
  );
}


export default connect(
  (state) => ({
    basketCatalog: state.basket
  }),
  (dispatch) => ({
    //
    ActionRemoveToBasket: (id) =>
      dispatch({ type: ACTIONS.REMOVE_TO_BASKET, removeId: id }),
    
  })
)(Check);