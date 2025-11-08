import { useState } from "react";
import { getImageUrl } from "../utils/shop-utility";
import Rating from "./Rating";

export default function ProductCard({ product }) {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const imageUrl = getImageUrl(product.image);

  const handleUpdateCart = (productObj) => {
    const found = cartProducts.find((product) => {
      return (product.id = productObj.id);
    });

    if (!found) {
      setCartProducts([...cartProducts, productObj]);
      setQuantity(quantity - 1);
    } else {
      const newCartProducts = cartProducts.filter((product) => {
        return product.id != productObj.id;
      });
      setCartProducts(newCartProducts);
      setQuantity(quantity + 1);
    }

    setIsAddedToCart(!isAddedToCart);
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
          <span className="text-xs text-gray-700">({quantity} pcs left)</span>
        </div>
        <div className="flex items-center">
          <p className="font-bold">${product.currentPrice}</p>
          <p className="text-gray-400 line-through ml-2">
            {product.previousPrice}
          </p>
        </div>

        {isAddedToCart ? (
          <button
            className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
            onClick={() => handleUpdateCart(product)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            disabled={quantity === 0}
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
