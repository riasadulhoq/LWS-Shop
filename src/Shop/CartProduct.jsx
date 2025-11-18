import { useContext } from "react";
import { ShopContext } from "../context";
import { getImageUrl } from "../utils/shop-utility";

export default function CartProduct({ product }) {
  // console.log(product);
  const { cartDispatch, handleUpdateCart } = useContext(ShopContext);
  const imageUrl = getImageUrl(product.image);

  const handleIncreaseCartQuantity = (productObj) => {
    if (productObj.cartQuantity < productObj.quantity) {
      cartDispatch({
        type: "INCREASE_CART_QUANTITY",
        payload: productObj,
      });
    }
  };

  const handleReduceCartQuantity = (productObj) => {
    if (productObj.cartQuantity > 1) {
      cartDispatch({
        type: "DECREASE_CART_QUANTITY",
        payload: productObj,
      });
    }
  };

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={product.title}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{product.title}</h3>
          <span
            className="text-red-500 text-sm"
            onClick={() => handleUpdateCart(product)}
          >
            ×
          </span>
        </div>
        <p className="text-sm text-gray-500">
          Colour: {product.selectedColour}
        </p>
        <p className="text-sm text-gray-500">Size: {product.selectedSize}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">£{product.currentPrice}</p>
          <div className="flex items-center space-x-2">
            <button
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
              onClick={() => handleReduceCartQuantity(product)}
            >
              −
            </button>
            <span className="text-sm">{product.cartQuantity}</span>
            <button
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
              onClick={() => handleIncreaseCartQuantity(product)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
