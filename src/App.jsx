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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  listItemRequest() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.props.onAddToDo(json);
      });
  }

  componentDidMount() {
    this.listItemRequest();
  }

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="catalog" element={<CatalogProduct storProduct={this.props.testStore} />}/>
            <Route path="basket" element={<Basket basketId={this.props.basket} catalo={this.props.testStore}/>} />
            {/*           <Route path=" *" element={<Basket />} /> */}
          </Route>
        </Routes>
      </>
    );
  }
}

export default connect(
  (state) => ({
    //state это стор ридакса ридакс можно небольшею логику распредить она должна вернуть обьект
    testStore: state.productList,
    basket: state.basket
  }),
  (dispatch) => ({
    //
    onAddToDo: (item) =>
      dispatch({ type: ACTIONS.ADD_TO_DO, productList: item }),
  })
)(App);
