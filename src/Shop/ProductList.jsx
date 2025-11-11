import { useContext } from "react";
import { ShopContext } from "../context";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { productList, setProductList } = useContext(ShopContext);

  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected === "mostPopular") {
      const mostPopular = [...productList].sort((a, b) => b.rating - a.rating);
      // console.log(mostPopular);
      return setProductList(mostPopular);
    } else if (selected === "newest") {
      const newest = [...productList].sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      // console.log(newest);
      return setProductList(newest);
    } else if (selected === "lowToHigh") {
      const lowToHigh = [...productList].sort(
        (a, b) => a.currentPrice - b.currentPrice
      );
      // console.log(lowToHigh);
      return setProductList(lowToHigh);
    } else if (selected === "highToLow") {
      const highToLow = [...productList].sort(
        (a, b) => b.currentPrice - a.currentPrice
      );
      // console.log(highToLow);
      return setProductList(highToLow);
    } else {
      return productList;
    }
  };
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            onChange={handleChange}
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
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
