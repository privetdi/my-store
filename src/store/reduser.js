import { ACTIONS } from "./store";

const initialState = {
  basket: [],
  item: {},
  productList: {},
  countTask: 0,
  sumOrder: 0,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTIONS.ADD_TO_BASKET:
      actions.productItem.count = 1;
      console.log('add to basket ++++++++')
      return {
        ...state,
        basket: [...state.basket, actions.productItem],
      };
    case ACTIONS.ADD_TO_DO:
      actions.productList.map((item) => {
        item.count = 0;
      });
      return {
        ...state,
        productList: [actions.productList],
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
      actions.product.count += 1;
      return {
        ...state,
        basket: [...state.basket.filter(i => i.id != actions.product.id), actions.product]
      };
    case ACTIONS.COUNT_REMOVE:
      return {
        ...state,
      };

      
      case ACTIONS.SET_SUM_ORDER:
        return {
          ...state,
          sumOrder: actions.sumOrder,
        };

    default:
      return state;
  }
};

export default reducer;
