"use client";

import Link from "next/link";
import { CheckCircle2, Home, Receipt } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/navbar/page";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();

  const status = searchParams.get("status");
  const txRef = searchParams.get("tx_ref");
  const transactionId = searchParams.get("transaction_id");

  const isSuccess = status === "completed" || status === "successful";

  return (
    <div>

        <Navbar/>
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-8 md:p-10 text-center">
          
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {isSuccess ? "Payment Successful!" : "Payment Received"}
          </h1>

          <p className="text-slate-600 mb-8">
            Thank you for your booking request. Your payment has been received
            successfully and we will contact you shortly with the next steps.
          </p>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Receipt className="text-amber-600 mt-1" size={18} />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Transaction ID
                </p>
                <p className="font-medium text-slate-800">
                  {transactionId || "N/A"}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Booking Reference
              </p>
              <p className="font-medium text-slate-800 break-all">
                {txRef || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Status
              </p>
              <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                {status || "completed"}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-xl font-medium transition"
            >
              <Home size={18} />
              Go Home
            </Link>

            <Link
              href="/booking"
              className="block w-full border border-slate-200 hover:bg-slate-50 py-3 rounded-xl font-medium text-slate-700 transition"
            >
              Make Another Booking
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Need assistance? Our team will reach out shortly regarding your event.
        </p>
      </div>
    </main>
    </div>
  );
}