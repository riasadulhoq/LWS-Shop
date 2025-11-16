import { useState } from "react";
import Announcement from "./Announcement";
import { ShopContext } from "./context";
import { getAllProducts } from "./data/products";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";
import CartSection from "./Shop/CartSection";
import ProductList from "./Shop/ProductList";

function App() {
  const initialProductList = getAllProducts();

  const [productList, setProductList] = useState(initialProductList);
  const [cartProducts, setCartProducts] = useState([]);
  const [showCart, setShowCart] = useState(true);
  const [subTotal, setSubTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProductList, setSearchedProductList] = useState([]);

  const handleUpdateCart = (productObj) => {
    const found = cartProducts.find((product) => {
      return product.id === productObj.id;
    });

    if (!found) {
      if (productObj.selectedColour && productObj.selectedSize) {
        setCartProducts([...cartProducts, { ...productObj, cartQuantity: 1 }]);
        const newProductList = productList.map((product) => {
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
        setProductList(newProductList);
        setSubTotal(subTotal + productObj.currentPrice * 1);
      }
    } else {
      const removedProduct = cartProducts.find(
        (product) => product.id === productObj.id
      );
      const newCartProducts = cartProducts.filter((product) => {
        return product.id != productObj.id;
      });
      setCartProducts(newCartProducts);
      const newProductList = productList.map((product) => {
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
      setProductList(newProductList);
      setSubTotal(
        subTotal - productObj.currentPrice * removedProduct.cartQuantity
      );
    }
  };

  return (
    <div className="bg-white font-satoshi">
      <ShopContext.Provider
        value={{
          productList,
          setProductList,
          handleUpdateCart,
          cartProducts,
          setCartProducts,
          subTotal,
          setSubTotal,
          searchTerm,
          setSearchTerm,
          searchedProductList,
          setSearchedProductList,
          showCart,
          setShowCart,
        }}
      >
        <Announcement />
        <Header />
        <main className="container mx-auto px-4 md:px-8 py-8">
          <div
            className={`flex flex-col-reverse lg:grid gap-8 ${
              showCart ? "lg:grid-cols-3" : "lg:grid-cols-2"
            } `}
          >
            <ProductList />
            {showCart && <CartSection />}
          </div>
        </main>
        <Newsletter />
        <Footer />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
