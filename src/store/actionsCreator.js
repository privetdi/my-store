import { ACTIONS } from "./store";

export let getActionAddToBasket = (item) => {
  return { type: ACTIONS.ADD_TO_BASKET, productItem: item };
};

export let getActionOnAddToDo = (item) => {
  return { type: ACTIONS.ADD_TO_DO, productList: item };
};

export let getActionRemoveFromBasket = (id) => {
  return { type: ACTIONS.REMOVE_FROM_BASKET, removeId: id };
};
