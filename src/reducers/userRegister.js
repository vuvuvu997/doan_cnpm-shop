import * as toastMessage from "../helpers/toastMessage";
let initialState = {
  isRegister: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTER":
      console.log(action.payload);
      if (!action.payload.isRegister) {
        toastMessage.toastError("Register fail. Please register again!");
        return { ...state };
      }
      const newState = {
        ...state,
        isRegister: true,
      };
      return newState;

    default:
      return state;
  }
};

export default myReducer;
