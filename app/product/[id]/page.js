import CheckoutButton from "../../../components/CheckoutButton";
import Link from "next/link";

// यह आपका डेमो डेटाबेस है (आप यहाँ और भी प्रोडक्ट्स जोड़ सकते हैं)
const products = {
  "nextjs-starter": {
    name: "Next.js Starter Pro",
    description: "Complete template with Authentication, Dashboard, and Payments ready. Save 100+ hours of development time.",
    price: 1999,
    features: ["NextAuth Login System", "Razorpay Payment Setup", "Tailwind CSS Design", "User Dashboard", "Lifetime Updates"]
  },
  "sales-funnel": {
    name: "High-Converting Sales Funnel",
    description: "A plug-and-play sales funnel template to maximize your digital product sales.",
    price: 999,
    features: ["Optimized Landing Page", "Checkout Page Design", "Thank You Page", "Mobile Responsive"]
  }
};

export default function ProductPage({ params }) {
  const { id } = params;
  const product = products[id];

  // अगर कोई गलत लिंक डालता है, तो यह दिखेगा
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Product Not Found</h1>
        <Link href="/" className="text-blue-600 font-semibold hover:underline">&larr; Go back to Home</Link>
      </div>
    );
  }

  // अगर प्रोडक्ट मिल जाता है, तो यह डिज़ाइन दिखेगा
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-8 md:p-12">
          <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-blue-600 mb-8 inline-block">
            &larr; Back to Store
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{product.description}</p>
          
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-800 mb-4 text-lg">What's included in this package:</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8 mt-4">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <span className="block text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Total Price</span>
              <span className="text-5xl font-black text-gray-900">₹{product.price}</span>
            </div>
            
            {/* यहाँ हमने अपना पेमेंट बटन लगा दिया है */}
            <div className="w-full md:w-auto">
              <CheckoutButton amount={product.price} productName={product.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
