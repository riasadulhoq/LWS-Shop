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
    const newProductList = cartState.productList.map((product) => {
      if (product.id === action.payload.id) {
        return {
          ...product,
          quantity: product.quantity - 1,
          isAddedToCart: true,
        };
      } else {
        return product;
      }
    });
    return {
      ...cartState,
      cartProducts: [
        ...cartState.cartProducts,
        { ...action.payload, cartQuantity: 1 },
      ],
      productList: newProductList,
      subTotal: cartState.subTotal + action.payload.currentPrice * 1,
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    const removedProduct = cartState.cartProducts.find(
      (product) => product.id === action.payload.id
    );
    const newCartProducts = cartState.cartProducts.filter((product) => {
      return product.id != action.payload.id;
    });
    const newProductList = cartState.productList.map((product) => {
      if (product.id === action.payload.id) {
        return {
          ...product,
          selectedColour: "",
          selectedSize: "",
          quantity: product.quantity + removedProduct.cartQuantity,
          isAddedToCart: false,
        };
      } else {
        return product;
      }
    });
    return {
      ...cartState,
      cartProducts: newCartProducts,
      productList: newProductList,
      subTotal:
        cartState.subTotal -
        action.payload.currentPrice * removedProduct.cartQuantity,
    };
  } else if (action.type === "INCREASE_CART_QUANTITY") {
    const newProductList = cartState.productList.map((product) => {
      if (product.id === action.payload.id) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
    const newCartProducts = cartState.cartProducts.map((product) => {
      if (product.id === action.payload.id) {
        return {
          ...product,
          cartQuantity: product.cartQuantity + 1,
        };
      } else {
        return product;
      }
    });
    return {
      ...cartState,
      cartProducts: newCartProducts,
      productList: newProductList,
      subTotal: cartState.subTotal + action.payload.currentPrice,
    };
  } else if (action.type === "DECREASE_CART_QUANTITY") {
    const newProductList = cartState.productList.map((product) => {
      if (product.id === action.payload.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
    const newCartProducts = cartState.cartProducts.map((product) => {
      if (product.id === action.payload.id) {
        return {
          ...product,
          cartQuantity: product.cartQuantity - 1,
        };
      } else {
        return product;
      }
    });
    return {
      ...cartState,
      cartProducts: newCartProducts,
      productList: newProductList,
      subTotal: cartState.subTotal - action.payload.currentPrice,
    };
  } else if (action.type === "SORT_PRODUCTS") {
    return {
      ...cartState,
      productList: action.payload,
    };
  } else if (action.type === "SELECT_COLOUR") {
    const userSelectedColour = action.event.target.value;
    const newProductList = cartState.productList.map((product) => {
      if (product.id === action.payload.id) {
        return {
          ...product,
          selectedColour: userSelectedColour,
        };
      } else {
        return product;
      }
    });
    return {
      ...cartState,
      productList: newProductList,
    };
  } else if (action.type === "SELECT_SIZE") {
    const userSelectedSize = action.event.target.value;
    const newProductList = cartState.productList.map((product) => {
      if (product.id === action.payload.id) {
        return {
          ...product,
          selectedSize: userSelectedSize,
        };
      } else {
        return product;
      }
    });
    return {
      ...cartState,
      productList: newProductList,
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
