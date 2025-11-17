import { useContext } from "react";
import { ShopContext } from "../context";
import { getImageUrl } from "../utils/shop-utility";
import Rating from "./Rating";

export default function ProductCard({ product }) {
  const imageUrl = getImageUrl(product.image);

  const { cartState, cartDispatch, handleUpdateCart } = useContext(ShopContext);

  const handleColourChange = (e, productObj) => {
    const userSelectedColour = e.target.value;

    const newProductList = cartState.productList.map((product) => {
      if (product.id === productObj.id) {
        return {
          ...product,
          selectedColour: userSelectedColour,
        };
      } else {
        return product;
      }
    });

    cartDispatch({
      type: "SELECT_COLOUR",
      newProductList: newProductList,
    });
  };

  const handleSizeChange = (e, productObj) => {
    const userSelectedSize = e.target.value;

    const newProductList = cartState.productList.map((product) => {
      if (product.id === productObj.id) {
        return {
          ...product,
          selectedSize: userSelectedSize,
        };
      } else {
        return product;
      }
    });

    cartDispatch({
      type: "SELECT_SIZE",
      newProductList: newProductList,
    });
  };

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={product.title}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.title} </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <Rating value={product.rating} />
            <span className="text-xs text-gray-500 ml-1">
              {product.rating}/5
            </span>
          </div>

          <span className="text-xs text-gray-700">
            ({product.quantity} pcs left)
          </span>
        </div>
        <div className="flex items-center space-x-2 my-2">
          <span className="text-sm">Colour:</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            onChange={(e) => handleColourChange(e, product)}
          >
            <option value="">Select</option>
            {product.colour.map((colour, idx) => (
              <option key={idx} value={colour}>
                {colour}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2 my-2">
          <span className="text-sm">Size:</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            onChange={(e) => handleSizeChange(e, product)}
          >
            <option value="">Select</option>
            {product.size.map((size, idx) => (
              <option key={idx} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <p className="font-bold">${product.currentPrice}</p>
          <p className="text-gray-400 line-through ml-2">
            {product.previousPrice}
          </p>
        </div>

        {product.isAddedToCart ? (
          <button
            className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
            onClick={() => handleUpdateCart(product)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            disabled={product.quantity === 0}
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
            onClick={() => handleUpdateCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
