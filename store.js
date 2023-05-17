import { createStore } from 'redux';

const saveProductData = (data) => {
  return {
    type: 'SAVE_PRODUCT_DATA',
    payload: data,
  };
};

const initialState = {
  productData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_PRODUCT_DATA':
      return {
        ...state,
        productData: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export { store, saveProductData };
