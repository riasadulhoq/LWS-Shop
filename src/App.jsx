import { useReducer, useState } from "react";
import Announcement from "./Announcement";
import { ShopContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";
import { cartReducer, initialCartState } from "./reducers/CartReducer";
import CartSection from "./Shop/CartSection";
import ProductList from "./Shop/ProductList";

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProductList, setSearchedProductList] = useState([]);

  const handleUpdateCart = (productObj) => {
    const found = cartState.cartProducts.find((product) => {
      return product.id === productObj.id;
    });

    if (!found) {
      if (productObj.selectedColour && productObj.selectedSize) {
        const newProductList = cartState.productList.map((product) => {
          if (product.id === productObj.id) {
            return {
              ...product,
              quantity: product.quantity - 1,
              isAddedToCart: true,
            };
          } else {
            return product;
          }
        });

        cartDispatch({
          type: "ADD_TO_CART",
          productObj: productObj,
          newProductList: newProductList,
        });
      } else {
        console.warn(
          `Colour ${productObj.selectedColour} Or Size ${productObj.selectedSize} Not Selected! `
        );
      }
    } else {
      const removedProduct = cartState.cartProducts.find(
        (product) => product.id === productObj.id
      );
      const newCartProducts = cartState.cartProducts.filter((product) => {
        return product.id != productObj.id;
      });
      const newProductList = cartState.productList.map((product) => {
        if (product.id === productObj.id) {
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
      cartDispatch({
        type: "REMOVE_FROM_CART",
        newProductList: newProductList,
        newCartProducts: newCartProducts,
        removedProduct: removedProduct,
        productObj: productObj,
      });
    }
  };

  return (
    <div className="bg-white font-satoshi">
      <ShopContext.Provider
        value={{
          cartState,
          cartDispatch,
          handleUpdateCart,
          searchTerm,
          setSearchTerm,
          searchedProductList,
          setSearchedProductList,
        }}
      >
        <Announcement />
        <Header />
        <main className="container mx-auto px-4 md:px-8 py-8">
          <div
            className={`flex flex-col-reverse lg:grid gap-8 ${
              cartState.showCart ? "lg:grid-cols-3" : "lg:grid-cols-2"
            } `}
          >
            <ProductList />
            {cartState.showCart && <CartSection />}
          </div>
        </main>
        <Newsletter />
        <Footer />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
