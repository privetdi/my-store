import React from "react";

function Btn(props) {
  let {cb, productId } = props;
  return (
    <button className="button add-to-basket" onClick={()=>cb(productId)}>
      btn
    </button>
  );
}

export default Btn;
