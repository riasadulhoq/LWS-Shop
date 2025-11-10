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
  const [subTotal, setSubTotal] = useState(0);

  const handleUpdateCart = (productObj) => {
    const found = cartProducts.find((product) => {
      return product.id === productObj.id;
    });

    if (!found) {
      setCartProducts([...cartProducts, productObj]);
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
      setSubTotal(subTotal + productObj.currentPrice);
    } else {
      const newCartProducts = cartProducts.filter((product) => {
        return product.id != productObj.id;
      });
      setCartProducts(newCartProducts);
      const newProductList = productList.map((product) => {
        if (product.id === productObj.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
            isAddedToCart: false,
          };
        } else {
          return product;
        }
      });
      setProductList(newProductList);
      setSubTotal(subTotal - productObj.currentPrice);
    }
  };

  return (
    <div className="bg-white font-satoshi">
      <ShopContext.Provider
        value={{ productList, handleUpdateCart, cartProducts, subTotal }}
      >
        <Announcement />
        <Header />
        <main className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ProductList />
            <CartSection />
          </div>
        </main>
        <Newsletter />
        <Footer />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
