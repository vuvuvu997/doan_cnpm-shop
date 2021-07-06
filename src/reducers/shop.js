import * as ActionTypes from "./../constants/shop";
let initialState = {
  id: "",
  nameShop: "",
  productType: "",
  address: "",
  timeEstablish: "",
  phone: "",
  email: "",
  owner: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_SHOP:
      const { data } = action.payload;
      const newState = {
        ...state,
        id: data.id,
        nameShop: data.name_shop,
        productType: data.product_type,
        address: data.address,
        timeEstablish: data.time_establish,
        phone: data.phone,
        email: data.email,
        owner: data.owner,
      };
      return newState;
    default:
      return { ...state };
  }
};

export default myReducer;
