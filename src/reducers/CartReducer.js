import { getAllProducts } from "./../data/products";

const initialProductList = getAllProducts();

export const initialCartState = {
  productList: initialProductList,
  cartProducts: [],
  subTotal: 0,
  showCart: true,
};

export const cartReducer = (cartState, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...cartState,
      cartProducts: [
        ...cartState.cartProducts,
        { ...action.productObj, cartQuantity: 1 },
      ],
      productList: action.newProductList,
      subTotal: cartState.subTotal + action.productObj.currentPrice * 1,
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...cartState,
      cartProducts: action.newCartProducts,
      productList: action.newProductList,
      subTotal:
        cartState.subTotal -
        action.productObj.currentPrice * action.removedProduct.cartQuantity,
    };
  } else if (action.type === "INCREASE_CART_QUANTITY") {
    return {
      ...cartState,
      cartProducts: action.newCartProducts,
      productList: action.newProductList,
      subTotal: cartState.subTotal + action.productObj.currentPrice,
    };
  } else if (action.type === "DECREASE_CART_QUANTITY") {
    return {
      ...cartState,
      cartProducts: action.newCartProducts,
      productList: action.newProductList,
      subTotal: cartState.subTotal - action.productObj.currentPrice,
    };
  } else if (action.type === "SORT_PRODUCTS") {
    return {
      ...cartState,
      productList: action.sortedProductList,
    };
  } else if (action.type === "SELECT_COLOUR") {
    return {
      ...cartState,
      productList: action.newProductList,
    };
  } else if (action.type === "SELECT_SIZE") {
    return {
      ...cartState,
      productList: action.newProductList,
    };
  } else if (action.type === "DISPLAY_CART") {
    return {
      ...cartState,
      showCart: !cartState.showCart,
    };
  } else {
    return cartState;
  }
};
