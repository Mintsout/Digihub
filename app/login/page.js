"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black p-4 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Visuals & Branding */}
        <div className="w-full md:w-1/2 bg-blue-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <Link href="/" className="text-3xl font-extrabold tracking-tight">Digihub.</Link>
            <p className="mt-6 text-lg text-blue-100">
              Access your premium tools, download templates, and scale your online business today.
            </p>
          </div>
          <div className="relative z-10 mt-12">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-gray-200"></div>
              <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-gray-300"></div>
              <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-gray-400"></div>
            </div>
            <p className="mt-4 text-sm text-blue-200">Join 5,000+ creators & developers.</p>
          </div>
          {/* Decorative Blur Backgrounds */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-700 opacity-50 blur-3xl"></div>
        </div>

        {/* Right Side - Google Login Button */}
        <div className="w-full md:w-1/2 p-10 sm:p-14 flex flex-col justify-center bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-500 mb-8">Sign in to access your dashboard.</p>
          
          <button 
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold shadow-sm hover:bg-gray-50 hover:shadow transition-all duration-200"
          >
            {/* Google Logo SVG */}
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <div className="mt-8 text-center text-sm text-gray-500">
            By signing in, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </div>
        </div>

      </div>
    </div>
  );
              }
              
