import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const options = {
      amount: amount * 100, // Razorpay पैसे (paise) में काम करता है, इसलिए 100 से गुणा किया है
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error("Razorpay Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
