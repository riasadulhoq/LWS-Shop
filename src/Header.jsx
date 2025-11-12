import { useContext, useState } from "react";
import { ShopContext } from "./context";
import CartIcon from "./SVG/CartIcon";
import ProfileIcon from "./SVG/ProfileIcon";
import SearchIcon from "./SVG/SearchIcon";

export default function Header() {
  const [search, setSearch] = useState("");
  const { productList, setProductList, cartProducts, showCart, setShowCart } =
    useContext(ShopContext);

  const totalCartQuantity = cartProducts.reduce(
    (accumulator, cartProduct) => accumulator + cartProduct.cartQuantity,
    0
  );

  const handleSearch = (e) => {
    const userSearch = e.target.value;
    setSearch(userSearch);
    const searchedProductList = productList.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
    setProductList(searchedProductList);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          LWS.SHOP
        </a>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-500 transition-colors">
            Shop
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            On Sale
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            New Arrivals
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            Brands
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
              value={search}
              onChange={handleSearch}
            />
            <span className="absolute right-3 top-2">
              <SearchIcon />
            </span>
          </div>

          <a
            href="#"
            className="hover:text-gray-500 transition-colors"
            onClick={handleShowCart}
          >
            <CartIcon />
            {cartProducts.length > 0 && (
              <span className="rounded-full absolute top-[40px] right-[203px] bg-black text-white text-center p-[2px] w-[30px] h-[30px]">
                {totalCartQuantity}
              </span>
            )}
          </a>

          <a href="#" className="hover:text-gray-500 transition-colors">
            <ProfileIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
