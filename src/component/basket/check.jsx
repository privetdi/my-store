import React from "react";
import { ACTIONS } from "../../store/store";
import { connect } from "react-redux";

function Check(props) {
  console.log("🚀 ~ file: check.jsx:26 ~ Check ~   props.basketCatalog:",   props.basketCatalog)
  let sum = () => {
/*     debugger */
   return props.basketCatalog.reduce((sum, current)=>{
    return +sum + +current.count * current.price
   }, 0)
  
    
  }

  props.setSumOrder(sum());
  return (
    
    <div className="checkList">
      <a>sum </a>
      <a>{props.sumState}</a>

    </div>
  );
}

export default connect(
  (state) => ({
    basketCatalog: state.basket,
    sumState : state.sumOrder
  }),
  (dispatch) => ({
    //
    setSumOrder: (sum) =>
      dispatch({ type: ACTIONS.SET_SUM_ORDER, sumOrder: sum }),
  })
)(Check);
