import { ACTIONS } from "./store";

const initialState = {
  basket: [],
  item: {},
  productList: {},
  countTask: 0,
  sumOrder: 0,
};

const reducer = (state = initialState, actions) => {
  let setSum = () => {
    return state.basket.reduce((sum, current) => {
      return sum + current.count * current.price;
    }, 0).toFixed(2);
  };
  switch (actions.type) {
    case ACTIONS.ADD_TO_BASKET:
      if (state.basket.length > 0) {
        if (
          state.basket.some((element) => element.id === actions.productItem.id)
        ) {
          actions.productItem.count += 1;
          return {
            ...state,
            basket: [
              ...state.basket.filter((i) => i.id !== actions.productItem.id),
              actions.productItem,
            ],
            sumOrder: setSum(),
          };
        } else {
          actions.productItem.count = 1;
          return {
            ...state,
            basket: [...state.basket, actions.productItem],
            sumOrder: setSum(),
          };
        }
      } else {
        actions.productItem.count = 1;
        return {
          ...state,
          basket: [...state.basket, actions.productItem],
          sumOrder: setSum(),
        };
      }
    case ACTIONS.ADD_TO_DO:
      actions.productList.map((item) => {
        item.count = 0;
      });
      return {
        ...state,
        productList: actions.productList,
      };
    case ACTIONS.REMOVE_FROM_BASKET:
      let basketNewList = state.basket.filter(function (item) {
        return item.id !== actions.removeId;
      });
      return {
        ...state,
        basket: basketNewList,
        sumOrder: setSum(),
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
