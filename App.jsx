import React, { useState } from 'react';

const WHATSAPP_NUMBER = "919879886910";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed w-full flex justify-between items-center p-6 z-50 bg-[#0a0a0a] border-b border-gray-800">
        <div className="text-2xl font-bold tracking-widest text-[#D4AF37]">LUSCIOUS</div>
        <div className="flex gap-4 text-sm">
          <a href="#services" className="hover:text-[#D4AF37] transition">Services</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition">Book Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 flex flex-col justify-center items-center text-center px-4 relative min-h-screen">
        <h1 className="text-5xl md:text-7xl text-[#D4AF37] mb-6 leading-tight font-serif">
          Luscious Salon <br/> <span className="text-3xl md:text-5xl text-white">& D's Bridal Studio</span>
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl text-gray-300">
          Where luxury meets artistry. Experience the finest in bridal styling and premium salon services.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#contact" className="bg-[#D4AF37] text-black px-8 py-3 rounded font-bold hover:bg-white transition text-center">
            Book Appointment
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-black transition font-bold">
            💬 WhatsApp Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-8 border-t border-white/10 bg-black">
        <div className="bg-white/5 p-8 rounded-lg border border-transparent hover:border-[#D4AF37]/30 transition">
          <h2 className="text-3xl text-[#D4AF37] mb-4 font-serif">The Luxurious Salon</h2>
          <p className="text-gray-300 mb-6">Premium haircuts, color transformations, and spa treatments tailored to elevate your elegance.</p>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✨ Advanced Hair Coloring</li>
            <li>✨ Keratin & Botox Treatments</li>
            <li>✨ Luxury Facials</li>
          </ul>
        </div>
        <div className="bg-white/5 p-8 rounded-lg border border-[#D4AF37]/20 transition">
          <h2 className="text-3xl text-[#D4AF37] mb-4 font-serif">D's Bridal Studio</h2>
          <p className="text-gray-300 mb-6">Cinematic bridal makeovers. Look breathtaking on your special day with HD makeup.</p>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✨ HD & Airbrush Bridal Makeup</li>
            <li>✨ Pre-Bridal Packages</li>
            <li>✨ Grooming & Draping</li>
          </ul>
        </div>
      </section>

      {/* Booking Form & Contact */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl text-[#D4AF37] mb-6 font-serif">Reserve Your Spot</h2>
            <BookingForm />
          </div>
          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-xl text-[#D4AF37] mb-2 font-serif">Visit Us</h3>
              <p className="text-gray-300">📍 Ahmedabad, Gujarat</p>
            </div>
            <div>
              <h3 className="text-xl text-[#D4AF37] mb-2 font-serif">Contact</h3>
              <p className="text-gray-300">📞 +91 98798 86910</p>
            </div>
            <div>
               <h3 className="text-xl text-[#D4AF37] mb-2 font-serif">Rating</h3>
               <p className="text-gray-300">⭐ 4.8 / 5 (Trusted by Hundreds)</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black py-8 px-6 text-center border-t border-white/10">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-2 tracking-widest font-serif">LUSCIOUS</h2>
          <p className="text-gray-500 font-light text-xs">&copy; {new Date().getFullYear()} Luscious Salon & Bridal Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}

function BookingForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await fetch('https://luscious-api.onrender.com/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('✅ Booking Successful! We will contact you soon.');
        setFormData({ name: '', phone: '', service: '', date: '' });
      } else {
        setStatus('⚠️ Please use WhatsApp to book.');
      }
    } catch (error) {
      setStatus('⚠️ Server error. Please use WhatsApp to book.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#D4AF37] outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input type="tel" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#D4AF37] outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      <select required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#D4AF37] outline-none" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
        <option value="" className="text-black">Select Service</option>
        <option value="Bridal Makeup" className="text-black">Bridal Makeup</option>
        <option value="Salon Services" className="text-black">Premium Salon Services</option>
      </select>
      <input type="date" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#D4AF37] outline-none" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
      <button type="submit" className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded hover:bg-white transition text-lg mt-2">Confirm Booking</button>
      {status && <p className="text-[#D4AF37] mt-2 font-light text-sm">{status}</p>}
    </form>
  );
}
