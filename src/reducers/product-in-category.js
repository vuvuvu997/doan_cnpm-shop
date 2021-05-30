import * as typeActionsProductInCategory from "./../constants/action-types-product-in-category";

let initialState = [];
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeActionsProductInCategory.FETCH_PRODUCTS_LIST_IN_CATEGORY:
      state = [...action.payload.data];
      return [...action.payload.data];
    case typeActionsProductInCategory.SORT_DECREATE_PRODUCT_PRICE:
      let newState = state.sort(function (a, b) {
        return b.price - a.price;
      });
      return [...newState];
    case typeActionsProductInCategory.SORT_INCREATE_PRODUCT_PRICE:
      let newStateIn = state.sort(function (a, b) {
        return a.price - b.price;
      });
      return [...newStateIn];
    case typeActionsProductInCategory.SORT_POPULAR_PRODUCT:
      let newStatePo = state.sort(function (a, b) {
        return b.count - a.count;
      });
      return [...newStatePo];
    case typeActionsProductInCategory.SORT_DISCOUNT_PRODUCT:
      let newStateDi = state.sort(function (a, b) {
        return b.count - a.count;
      });
      return [...newStateDi];
    default:
      return [...state];
  }
};

export default myReducer;
