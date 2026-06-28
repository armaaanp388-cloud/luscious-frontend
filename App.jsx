import React, { useState } from 'react';

const WHATSAPP_NUMBER = "919879886910";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full flex justify-between items-center p-6 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-gray-800">
        <div className="text-2xl font-bold tracking-widest text-[#D4AF37]">LUSCIOUS</div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-[#D4AF37] transition">About</a>
          <a href="#gallery" className="hover:text-[#D4AF37] transition">Gallery</a>
          <a href="#reviews" className="hover:text-[#D4AF37] transition">Reviews</a>
        </div>
        <a href="#contact" className="bg-[#D4AF37] text-black px-4 py-2 rounded font-bold hover:bg-white transition text-sm">
          Book Now
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex flex-col justify-center items-center text-center px-4 min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&w=1920&q=80" alt="Cinematic Bridal" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl text-[#D4AF37] mb-6 leading-tight font-serif drop-shadow-lg">
            Luscious Salon <br/> <span className="text-3xl md:text-5xl text-white">& D's Bridal Studio</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl text-gray-300 mx-auto">
            Where luxury meets artistry. Experience the finest in bridal styling and premium salon services.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#contact" className="bg-[#D4AF37] text-black px-8 py-3 rounded font-bold hover:bg-white transition shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              Book Appointment
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-black transition font-bold bg-black/50">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-20 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" alt="Salon Aesthetic" className="rounded-lg shadow-2xl border border-white/10" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl text-[#D4AF37] mb-6 font-serif">The Art of Elegance</h2>
            <p className="text-gray-300 mb-4 font-light leading-relaxed">
              At Luscious Salon, we believe that beauty is in the details. Every element is designed to make you stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="contact" className="py-24 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-[#D4AF37] mb-8 font-serif text-center">Reserve Your Spot</h2>
          <BookingForm />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black py-12 px-6 text-center border-t border-white/10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4 tracking-widest font-serif">LUSCIOUS</h2>
          <p className="text-gray-500 font-light text-sm">&copy; {new Date().getFullYear()} Luscious Salon. All rights reserved.</p>
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
      const response = await fetch('https://luscious-backend.onrender.com/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('✅ Booking Successful! We will contact you soon.');
        setFormData({ name: '', phone: '', service: '', date: '' });
      } else {
        setStatus('⚠️ Error. Please use WhatsApp to book.');
      }
    } catch (error) {
      setStatus('⚠️ Server error. Please use WhatsApp to book.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
      <input
        
