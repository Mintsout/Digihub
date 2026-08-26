import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <section className="bg-white py-20 text-center px-4 shadow-sm border-b">
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

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Digihub Premium Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Next.js Starter Pro</h3>
            <p className="text-gray-600 mb-6 h-12">Complete template with Authentication, Dashboard, and Payments ready.</p>
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-3xl font-extrabold text-gray-900">₹1999</span>
              {/* यहाँ हमने डायनामिक पेज का लिंक दे दिया है */}
              <Link href="/product/nextjs-starter" className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-bold transition-all">
                View Details &rarr;
              </Link>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Sales Funnel</h3>
            <p className="text-gray-600 mb-6 h-12">A plug-and-play sales funnel template to maximize your digital product sales.</p>
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-3xl font-extrabold text-gray-900">₹999</span>
              <Link href="/product/sales-funnel" className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-bold transition-all">
                View Details &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
