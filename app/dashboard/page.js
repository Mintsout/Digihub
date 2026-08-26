import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  // अगर लॉगिन नहीं है, तो सीधा लॉगिन पेज पर भेज दो
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">My Dashboard</h1>
          <Link href="/api/auth/signout" className="text-red-500 font-semibold hover:underline">
            Logout
          </Link>
        </div>
        
        <h2 className="text-xl mb-6 text-gray-600">
          Welcome back, <span className="font-bold text-blue-600">{session?.user?.email}</span>!
        </h2>
        
        <h3 className="text-2xl font-bold mb-4">Your Purchased Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
            <h4 className="font-bold text-lg text-gray-800">Next.js Starter Pro</h4>
            <p className="text-sm text-gray-500 mb-4">Status: Active</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 w-full text-center transition-all">
              Download Product
            </button>
          </div>
        </div>
        
        <div className="mt-8">
          <Link href="/" className="text-blue-500 hover:underline">
            &larr; Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
  }
