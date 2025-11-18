import { getAllProducts } from "./../data/products";

const initialProductList = getAllProducts();

export const initialCartState = {
  productList: initialProductList,
  cartProducts: [],
  subTotal: 0,
  showCart: true,
};

export const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
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
    }
    case "REMOVE_FROM_CART": {
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
    }
    case "INCREASE_CART_QUANTITY": {
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
      return {
        ...cartState,
        cartProducts: newCartProducts,
        productList: newProductList,
        subTotal: cartState.subTotal + action.payload.currentPrice,
      };
    }
    case "DECREASE_CART_QUANTITY": {
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
      return {
        ...cartState,
        cartProducts: newCartProducts,
        productList: newProductList,
        subTotal: cartState.subTotal - action.payload.currentPrice,
      };
    }
    case "SORT_PRODUCTS": {
      return {
        ...cartState,
        productList: action.payload,
      };
    }
    case "SELECT_COLOUR": {
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
    }
    case "SELECT_SIZE": {
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
    }
    case "DISPLAY_CART": {
      return {
        ...cartState,
        showCart: !cartState.showCart,
      };
    }
    default: {
      return cartState;
    }
  }
};
