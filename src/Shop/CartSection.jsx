import { useContext } from "react";
import { ShopContext } from "../context";
import CartProduct from "./CartProduct";
import OrderSummary from "./OrderSummary";

export default function CartSection() {
  const { cartState } = useContext(ShopContext);

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {cartState.cartProducts.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}

        <OrderSummary />
      </div>
    </div>
  );
}
