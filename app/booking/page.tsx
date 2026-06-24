"use client";

import Navbar from '../components/navbar/page';
import Footer from '../components/footer/page';
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface BookingFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  eventType: string;
  date: string;
  location: string;
  budget: number;
  notes: string;
}

export default function BookingPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventType: '',
    date: '',
    location: '',
    budget: 100000,
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'budget' ? Number(value) : value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log(process.env.FLW_SECRET_KEY);

  const tx_ref = `BOOKING-${Date.now()}`;

  const payload = {
    tx_ref,
    amount: formData.budget,
    currency: "NGN",
    redirect_url: `${window.location.origin}/payment-success`,
    customer: {
      email: formData.email,
      phonenumber: formData.phoneNumber,
      name: formData.fullName,
    },
    customizations: {
      title: "Sammy Tee Booking",
      description: formData.eventType,
    },
  };

  try {
  const response = await fetch("/api/flutterwave", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

    const data = await response.json();

    if (data.status === "success") {
      window.location.href = data.data.link;
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
        <Navbar/>
        <main className="bg-[#fcfbf9] text-[#1c1c1c] font-sans antialiased selection:bg-amber-200 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Two-Column Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading Copy & Imagery */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-[52px] font-serif font-medium tracking-tight text-slate-900 leading-tight">
                Book the Maestro for <br />
                <span className="italic text-[#8B6A00]">Your Next Event</span>
              </h1>
              <p className="text-slate-600 leading-relaxed text-base max-w-md">
                Elevate your occasion with a bespoke musical performance tailored to your vision. From intimate weddings to grand corporate galas, Sammy Tee delivers an atmosphere of unparalleled elegance.
              </p>
            </div>

            {/* Visual Side Images Stack */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="aspect-[3/4] bg-slate-900 rounded-sm overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=400&q=80" 
                  alt="Live Grand Piano performance showcase" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
              <div className="aspect-[3/4] bg-slate-800 rounded-sm overflow-hidden shadow-md mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=400&q=80" 
                  alt="Acoustic guitar accompaniment closeup" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Form Structure & Real-Time Card Block */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Input Form Wrapper Card */}
            <div className="bg-[#FAF7F0] border border-[#EAE3D2] rounded-md p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name & Email Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-sm text-sm focus:outline-none focus:border-[#8B6A00] transition"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-sm text-sm focus:outline-none focus:border-[#8B6A00] transition"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number & Event Type Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      placeholder="+234 000 000-0000"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-sm text-sm focus:outline-none focus:border-[#8B6A00] transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Event Type</label>
                    <select 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-sm text-sm focus:outline-none focus:border-[#8B6A00] transition text-slate-700"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Live Band Performance">Live Band Performance</option>
                      <option value="Wedding Gala">Wedding Entertainment</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Studio Session">Music Production / Studio</option>
                    </select>
                  </div>
                </div>

                {/* Date Selection & Venue Location Input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Date</label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-sm text-sm focus:outline-none focus:border-[#8B6A00] transition text-slate-600"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Location</label>
                    <input 
                      type="text" 
                      name="location"
                      placeholder="City, Venue Name"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-sm text-sm focus:outline-none focus:border-[#8B6A00] transition"
                      required
                    />
                  </div>
                </div>

                {/* Range Selector: Budget Scale */}
                <div className="flex flex-col gap-1.5 py-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-500 tracking-wide uppercase">
                    <span>Budget Range</span>
                    <span className="text-[#8B6A00] font-bold text-sm">(₦){formData.budget.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    name="budget"
                    min="100000" 
                    max="2500000" 
                    step="5000"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full accent-[#8B6A00] cursor-pointer"
                  />
                </div>

                {/* Additional Notes Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Additional Notes</label>
                  <textarea 
                    name="notes"
                    rows={3}
                    placeholder="Share your vision or specific song requests..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 bg-white rounded-sm text-sm focus:outline-none focus:border-[#8B6A00] transition resize-none"
                  />
                </div>

                {/* Action Submit Button */}
                <button 
                  type="submit" 
                  className="w-full py-4 mt-2 bg-[#705600] text-white rounded-sm font-medium hover:bg-[#5C4600] transition flex items-center justify-center gap-2 shadow-sm text-sm tracking-wide uppercase"
                >
                  Send Booking Inquiry 
                  <span className="text-xs">▶</span>
                </button>
              </form>
            </div>

            {/* Interactive Section: Dynamic Booking Summary Display Box */}
            <div className="bg-[#EAE6DF] border border-slate-300 rounded-md p-5 flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-slate-300 pb-3 mb-4">
                <h3 className="font-serif font-semibold text-slate-800 text-sm tracking-wide uppercase">Booking Summary</h3>
                <Sparkles size={16} className="text-[#8B6A00]" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Client</span>
                  <p className="text-sm font-medium text-slate-800 mt-1 truncate">
                    {formData.fullName || '—'}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Event</span>
                  <p className="text-sm font-medium text-slate-800 mt-1 truncate">
                    {formData.eventType || '—'}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Date</span>
                  <p className="text-sm font-medium text-slate-800 mt-1 truncate">
                    {formData.date || '—'}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Venue</span>
                  <p className="text-sm font-medium text-slate-800 mt-1 truncate">
                    {formData.location || '—'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Social Proof & Host Testimonials */}
        <section className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B6A00] block mb-2">Praise</span>
            <h2 className="text-3xl font-serif font-medium text-slate-900">What Hosts Are Saying</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-sm p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="text-amber-500 text-sm">★★★★★</div>
              <p className="text-sm italic text-slate-600 font-serif leading-relaxed">
                "The performance transformed our gala into an ethereal experience. Pure artistry."
              </p>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Elena V.</h4>
                <span className="text-[11px] text-slate-400">Vogue Private Event</span>
              </div>
            </div>

            {/* Card 2 (Featured Card Accent) */}
            <div className="bg-white border-t-4 border-t-[#8B6A00] border border-slate-100 rounded-sm p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="text-amber-500 text-sm">★★★★★</div>
              <p className="text-sm italic text-slate-600 font-serif leading-relaxed">
                "Sammy's ability to read the room is unmatched. Every single song felt completely intentional."
              </p>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Marcus Thorne</h4>
                <span className="text-[11px] text-slate-400">Noble Leader Corp</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-sm p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="text-amber-500 text-sm">★★★★★</div>
              <p className="text-sm italic text-slate-600 font-serif leading-relaxed">
                "A true professional from the very first consultation call to the final standing ovation."
              </p>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Sarah & Tom</h4>
                <span className="text-[11px] text-slate-400">Destination Wedding</span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
    <Footer/>
    </div>
  );
}