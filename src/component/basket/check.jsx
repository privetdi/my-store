import React from "react";
import { connect } from "react-redux";

function Check(props) {
  return (
    <div className="checkList">
      <a>sum:</a>
      <a>{props.sumState}</a>
    </div>
  );
}

export default connect(
  (state) => ({
    basketCatalog: state.basket,
    sumState: state.sumOrder,
  }),
  null
)(Check);
