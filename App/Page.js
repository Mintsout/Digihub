import Link from "next/link";
import CheckoutButton from "../components/CheckoutButton"; // हमने अपना नया बटन यहाँ इम्पोर्ट किया है

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-white py-20 text-center px-4 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Welcome to <span className="text-blue-600">Digihub</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover premium tools, software templates, and top affiliate products to supercharge your online business.
        </p>
        <Link href="/dashboard" className="text-white bg-blue-600 px-8 py-3 rounded-lg font-bold shadow hover:bg-blue-700 transition-all">
          Go to My Dashboard
        </Link>
      </section>

      {/* Own Premium Products */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Digihub Premium Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">Next.js Starter Pro</h3>
            <p className="text-gray-600 mb-4">Complete template with Authentication, Dashboard, and Payments ready.</p>
            <div className="flex justify-between items-center mt-6">
              <span className="text-3xl font-extrabold text-gray-900">₹1999</span>
              {/* यहाँ हमने अपना असली CheckoutButton लगा दिया है */}
              <CheckoutButton amount={1999} productName="Next.js Starter Pro" />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Tools */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Recommended Affiliate Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-blue-400">Vercel Pro</h3>
              <p className="text-gray-400 my-3">The best cloud hosting for Next.js applications.</p>
              <a href="#" className="text-sm font-semibold underline hover:text-white">Get Started &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
