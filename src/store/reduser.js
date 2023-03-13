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
      
    if([...state.basket].length>0 ){
      console.log('true, >0')
     state.basket.map((item) =>
      {
        console.log("🚀 ~ file: reduser.js:18 ~ reducer ~ item:", item)
        console.log("🚀 ~ file: reduser.js:18 ~ reducer ~ actions.productId:", actions.productId.id)
        console.log("🚀 ~ file: reduser.js:18 ~ reducer ~  item.productId:",  item.id)
        console.log("🚀 ~ file: reduser.js:18 ~ reducer ~ item.productId == actions.productId:", item.id === actions.productId.id)
      })
    }else{
      console.log('[...state.basket].length>0', [...state.basket].length>0)
    }

      if([...state.basket].length>0){


        console.log(true);
        actions.productId.count += 1;
        return {
          ...state,
          basket: [...state.basket],
        }
      }else{
        console.log(false);
        actions.productId.count = 1;
        return {
          ...state,
          basket: [...state.basket, actions.productId],
        }
      }


;
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
