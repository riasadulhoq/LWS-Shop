import { useContext } from "react";
import { ShopContext } from "../context";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const {
    cartState,
    cartDispatch,
    searchTerm,
    searchedProductList,
    setSearchedProductList,
  } = useContext(ShopContext);

  const handleProductSorting = (e) => {
    const selected = e.target.value;

    let sortedProductList;

    if (searchTerm.trim().length > 0 && searchedProductList.length > 0) {
      if (!selected) {
        sortedProductList = [...searchedProductList];
        console.log(sortedProductList);
      } else if (selected === "mostPopular") {
        sortedProductList = [...searchedProductList].sort(
          (a, b) => b.rating - a.rating
        );
      } else if (selected === "newest") {
        sortedProductList = [...searchedProductList].sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
      } else if (selected === "lowToHigh") {
        sortedProductList = [...searchedProductList].sort(
          (a, b) => a.currentPrice - b.currentPrice
        );
      } else if (selected === "highToLow") {
        sortedProductList = [...searchedProductList].sort(
          (a, b) => b.currentPrice - a.currentPrice
        );
      }
      setSearchedProductList(sortedProductList);
    } else {
      if (!selected) {
        sortedProductList = [...cartState.productList];
        // console.log(sortedProductList);
      } else if (selected === "mostPopular") {
        sortedProductList = [...cartState.productList].sort(
          (a, b) => b.rating - a.rating
        );
      } else if (selected === "newest") {
        sortedProductList = [...cartState.productList].sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
      } else if (selected === "lowToHigh") {
        sortedProductList = [...cartState.productList].sort(
          (a, b) => a.currentPrice - b.currentPrice
        );
      } else if (selected === "highToLow") {
        sortedProductList = [...cartState.productList].sort(
          (a, b) => b.currentPrice - a.currentPrice
        );
      }

      cartDispatch({
        type: "SORT_PRODUCTS",
        payload: sortedProductList,
      });
    }

    // if (!selected) {
    //   sortedProductList = [...productList];
    //   console.log(sortedProductList);
    // } else if (selected === "mostPopular") {
    //   sortedProductList = [...productList].sort((a, b) => b.rating - a.rating);
    // } else if (selected === "newest") {
    //   sortedProductList = [...productList].sort(
    //     (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    //   );
    // } else if (selected === "lowToHigh") {
    //   sortedProductList = [...productList].sort(
    //     (a, b) => a.currentPrice - b.currentPrice
    //   );
    // } else if (selected === "highToLow") {
    //   sortedProductList = [...productList].sort(
    //     (a, b) => b.currentPrice - a.currentPrice
    //   );
    // }
    // setProductList(sortedProductList);
  };
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            onChange={handleProductSorting}
          >
            <option value="">Please Select</option>
            <option value="mostPopular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* <!-- Products Grid --> */}
      <div className="product-grid">
        {searchTerm.trim().length > 0 && !searchedProductList.length && (
          <p>
            No products were found matching the search term:{" "}
            <span className="font-semibold">{searchTerm}</span>!
          </p>
        )}
        {searchTerm.trim().length > 0 &&
          searchedProductList.length > 0 &&
          searchedProductList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {!searchTerm.trim().length &&
          cartState.productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {/* {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </div>
  );
}
