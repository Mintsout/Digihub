"use client";
import { useState } from "react";

export default function CheckoutButton({ amount, productName }) {
  const [loading, setLoading] = useState(false);

  const makePayment = async () => {
    setLoading(true);

    // Razorpay की स्क्रिप्ट लोड करना
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      return;
    }

    // हमारे API (जो हमने अभी बनाया था) से आर्डर बनाना
    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    }).then((t) => t.json());

    if (!data.success) {
      alert("Server error. Please try again.");
      setLoading(false);
      return;
    }

    // Razorpay का पेमेंट बॉक्स खोलना
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
      amount: data.order.amount,
      currency: data.order.currency,
      name: "Digihub Store",
      description: `Purchase of ${productName}`,
      order_id: data.order.id,
      handler: function (response) {
        // पेमेंट सफल होने पर क्या होगा
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // बाद में हम यहाँ यूज़र को डैशबोर्ड पर भेजेंगे
      },
      theme: { color: "#2563EB" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  return (
    <button
      onClick={makePayment}
      disabled={loading}
      className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-bold transition-all disabled:opacity-50"
    >
      {loading ? "Processing..." : `Buy Now - ₹${amount}`}
    </button>
  );
}

// सिक्योरिटी के साथ स्क्रिप्ट लोड करने का फंक्शन
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

