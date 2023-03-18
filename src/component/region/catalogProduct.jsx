import React from "react";
import CardsProduct from "../../component/product/cardProduct";
import "./catalogProduct.scss";

function CatalogProduct(props) {
  return (
    <div className="catalog">
      {Array.isArray(props.storProduct) ? (
        
        props.storProduct[0].map((item) => <CardsProduct key={item.id} Product={item} />)
      ) : (
        <>{"error"}</>
      )}

    </div>
  );
}

export default CatalogProduct;
