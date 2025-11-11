import { useContext } from "react";
import { ShopContext } from "../context";
import { getSortedProducts } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { productList, setProductList } = useContext(ShopContext);

  const handleChange = (e) => {
    const selected = e.target.value;
    const sortedProductList = getSortedProducts(selected);
    setProductList(sortedProductList);
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
