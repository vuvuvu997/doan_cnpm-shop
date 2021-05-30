import axios from "axios";
import * as actionTypes from "./../constants/action-types-cart";

const initialState = localStorage.getItem("cartEco")
  ? JSON.parse(localStorage.getItem("cartEco"))
  : [];

const findIndexEl = (arr, id) => {
  let result = -1;
  if (arr.length > 0) {
    result = arr.findIndex((item) => item.id === id);
  }
  return result;
};

const myReducer = (state = initialState, action) => {
  new Promise(function (resolve, reject) {
    resolve();
  }).then(() => {
    const token = localStorage.getItem("authentication_token");
    if (token) {
      const myConfig = {
        headers: { Authorization: token },
      };
      const fetchListCart = async () => {
        try {
          const response = await axios.get(
            "https://your-ecommerce.herokuapp.com/carts",
            myConfig
          );
          let data = response.data.products;
          //console.log(data);
          let newData =
            data.length > 0
              ? data.map((item) => {
                  return { ...item, isBought: false };
                })
              : [];
          localStorage.setItem("cartEco", JSON.stringify([...newData]));
        } catch (error) {
          console.log(error);
        }
      };
      fetchListCart();
    }
  });

  switch (action.type) {
    case actionTypes.FETCH_CART: {
      const data = [...action.payload.data];
      state =
        data.length > 0
          ? data.map((item) => {
              return { ...item, isBought: false };
            })
          : [];
      localStorage.setItem("cartEco", JSON.stringify([...state]));
      return [...state];
    }

    case actionTypes.ADD_PRODUCT_TO_CART:
      const indexAdd = findIndexEl(state, action.payload.data.id);
      if (indexAdd !== -1) {
        state[indexAdd].count += action.payload.data.count;
        state[indexAdd].isBought = action.payload.data.isBought;
      } else {
        state.unshift(action.payload.data);
      }
      localStorage.setItem("cartEco", JSON.stringify([...state]));
      return [...state];

    case actionTypes.CHANGE_PRODUCT_TO_CART:
      const indexChange = findIndexEl(state, action.payload.data.id);
      state[indexChange].count += action.payload.data.value;
      localStorage.setItem("cartEco", JSON.stringify([...state]));
      return [...state];

    case actionTypes.DELETE_PRODUCT_TO_CART:
      const indexDel = findIndexEl(state, action.payload.id);
      state.splice(indexDel, 1);
      localStorage.setItem("cartEco", JSON.stringify([...state]));
      return [...state];

    case actionTypes.IS_PRODUCT_BOUGHT:
      const indexBought = findIndexEl(state, action.payload.data.id);
      state[indexBought].isBought = action.payload.data.isBought;
      localStorage.setItem("cartEco", JSON.stringify([...state]));
      return [...state];

    case actionTypes.DELETE_PRODUCT_LIST_WHEN_ORDERED:
      const listOrdered = action.payload.data;
      const lengthList = listOrdered.length;
      let i = 0;
      while (i < lengthList) {
        let indexItemOrder = findIndexEl(state, listOrdered[i].id);
        if (indexItemOrder !== -1) {
          state.splice(indexItemOrder, 1);
        }
        i++;
      }
      localStorage.setItem("cartEco", JSON.stringify([...state]));
      return [...state];
    default:
      return [...state];
  }
};

export default myReducer;
