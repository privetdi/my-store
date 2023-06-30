import React from "react";
import "./App.css";
import { ACTIONS } from "./store/store";
import { connect } from "react-redux";
import CardsProduct from "./component/product/cardProduct";
import Header from "./component/region/header";
import { Routes, Route, Link } from "react-router-dom";
import CatalogProduct from "./component/region/catalogProduct";
import Basket from "./component/basket/basket";
import Layout from "./component/region/layout";
import { getActionOnAddToDo } from "./store/actionsCreator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  listItemRequest() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.props.ActionOnAddToDo(json);
      });
  }

  componentDidMount() {
    this.listItemRequest();
  }

  render() {
    return (
      <>
        <Routes>
          <Route path="/my-store" element={<Layout />}>
            <Route
              path="catalog"
              element={<CatalogProduct storProducts={this.props.testStore} />}
            />
            <Route path="basket" element={<Basket />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default connect(
  (state) => ({
    testStore: state.productList,
    basket: state.basket,
  }),
  (dispatch) => ({
    ActionOnAddToDo: (item) => dispatch(getActionOnAddToDo(item)),
  })
)(App);
