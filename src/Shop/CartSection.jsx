import { useContext } from "react";
import { ShopContext } from "../context";
import CartProduct from "./CartProduct";
import OrderSummary from "./OrderSummary";

export default function CartSection() {
  const { cartProducts } = useContext(ShopContext);

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {cartProducts.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}

        {/* <!-- Cart Item 1 --> */}
        {/* <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
            <img
              src="./assets/img/image 9-2.png"
              alt="Gradient Graphic T-shirt"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <h3 className="font-medium">Gradient Graphic T-shirt</h3>
              <span className="text-red-500 text-sm">×</span>
            </div>
            <p className="text-sm text-gray-500">Size: Large</p>
            <p className="text-sm text-gray-500">Color: White</p>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold">$145</p>
              <div className="flex items-center space-x-2">
                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  −
                </button>
                <span className="text-sm">1</span>
                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- Cart Item 2 --> */}
        {/* <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
            <img
              src="./assets/img/image 9-2.png"
              alt="Checkered Shirt"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <h3 className="font-medium">Checkered Shirt</h3>
              <span className="text-red-500 text-sm">×</span>
            </div>
            <p className="text-sm text-gray-500">Size: Medium</p>
            <p className="text-sm text-gray-500">Color: Red</p>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold">$180</p>
              <div className="flex items-center space-x-2">
                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  −
                </button>
                <span className="text-sm">1</span>
                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- Cart Item 3 --> */}
        {/* <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
            <img
              src="./assets/img/image 9-2.png"
              alt="Skinny Fit Jeans"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <h3 className="font-medium">Skinny Fit Jeans</h3>
              <span className="text-red-500 text-sm">×</span>
            </div>
            <p className="text-sm text-gray-500">Size: Large</p>
            <p className="text-sm text-gray-500">Color: Blue</p>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold">$240</p>
              <div className="flex items-center space-x-2">
                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  −
                </button>
                <span className="text-sm">1</span>
                <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <OrderSummary />
      </div>
    </div>
  );
}
