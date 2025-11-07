import { useState } from "react";
export default function Announcement() {
  const [displayOffer, setDisplayOffer] = useState(true);
  const handleDisplayOffer = () => {
    setDisplayOffer(false);
  };
  return (
    displayOffer && (
      <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline font-medium">
            Sign Up Now
          </a>
        </p>
        <button
          className="absolute right-4 top-2 text-white"
          onClick={handleDisplayOffer}
        >
          ×
        </button>
      </div>
    )
  );
}
