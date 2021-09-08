export const GET_PRODUCTS = "GET_PRODUCTS";
const SET_PRODUCTS = "SET_PRODUCTS"

export const getProduct = () => ({
  type: GET_PRODUCTS,
});

export const setProduct = (user) => ({
  type: SET_PRODUCTS,
  user,
});

const initialState = {};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const { user } = action;
      return { ...state, ...user };
    default:
      return state;
  }
};

export default productsReducer;
