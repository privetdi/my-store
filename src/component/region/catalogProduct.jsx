import React from "react";
import CardsProduct from "../../component/product/cardProduct";
import './catalogProduct.scss'

function CatalogProduct(props) {
  return (
    <div className="catalog">
      {Array.isArray(props.storProduct) ? (
        props.storProduct.map((item) => <CardsProduct Product={item} />)
      ) : (
        <>{"error"}</>
      )}
    </div>
  );
}

export default CatalogProduct;
