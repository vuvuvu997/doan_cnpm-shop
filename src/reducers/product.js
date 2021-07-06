import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
} from "../constants/product";

let initialState = {
  list: [],
  edittingProduct: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return { ...state, list: action.payload.data };
    case GET_PRODUCT_FAIL:
      return { ...state };
    case ADD_PRODUCT_SUCCESS:
      const addProduct = action.payload.data;
      state.list.unshift(addProduct);
      return { ...state };
    case ADD_PRODUCT_FAIL:
      return { ...state };
    case EDIT_PRODUCT_SUCCESS:
      const editProduct = action.payload.data;
      const indexEdit = state.list.findIndex(
        (item) => item.id === editProduct.id
      );
      state.list[indexEdit] = editProduct;
      return { ...state, editProduct };
    case EDIT_PRODUCT_FAIL:
      return { ...state };
    case DELETE_PRODUCT_SUCCESS:
      const id = action.payload.data;
      const newList = state.list.filter((item) => item.id !== id);
      return { ...state, list: newList };
    case DELETE_PRODUCT_FAIL:
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
