import { ACTIONS } from "./store";

const initialState = {
  basket: [],
  item: {},
  productList: [],
  countTask: 0,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTIONS.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, actions.productId],
      };
    case ACTIONS.ADD_TO_DO:
      return {
        ...state,
        productList: actions.productList,
      };
    case ACTIONS.REMOVE_TO_BASKET:
      let basketNewList = state.basket.filter(function (id) {
        return id !== actions.removeId;
      });
      return {
        ...state,
        basket: basketNewList,
      };
    case ACTIONS.COUNT_ADD:
      return {
        ...state,
      };
    case ACTIONS.COUNT_REMOVE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
