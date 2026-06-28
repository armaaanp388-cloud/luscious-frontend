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

      {/* Hero Section with Cinematic Background */}
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
              At Luscious Salon, we believe that beauty is in the details. From the perfect high-contrast cinematic lighting in our makeup studio to the premium products we use, every element is designed to make you stand out.
            </p>
            <p className="text-gray-300 font-light leading-relaxed">
              Whether you are preparing for a grand engagement ceremony, a traditional wedding, or just seeking a flawless daily aesthetic, our expert stylists are dedicated to crafting a look that is uniquely yours.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery / Bento Grid */}
      <section id="gallery" className="py-24 px-6 md:px-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#D4AF37] mb-4 font-serif">Our Masterpieces</h2>
          <p className="text-gray-400 font-light">A glimpse into our premium transformations.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded">
            <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80" alt="Makeup" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500"></div>
          </div>
          <div className="relative group overflow-hidden rounded">
            <img src="https://images.unsplash.com/photo-1516975080661-46bdcb258f35?auto=format&fit=crop&w=500&q=80" alt="Style" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
          </div>
          <div className="relative group overflow-hidden rounded">
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=500&q=80" alt="Hair" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
          </div>
          <div className="col-span-2 relative group overflow-hidden rounded">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" alt="Salon" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-6 md:px-20 bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl text-[#D4AF37] mb-2 font-serif">Client Stories</h2>
          <div className="flex justify-center gap-1 text-[#D4AF37] mb-4">
             ⭐ ⭐ ⭐ ⭐ ⭐
          </div>
          <p className="text-gray-400 font-light text-lg">Rated 4.8/5 by our beautiful clients.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded border border-white/5 hover:border-[#D4AF37]/40 transition">
            <p className="text-gray-300 font-light italic mb-6">"The cinematic bridal look they gave me was beyond my expectations. The photos came out absolutely stunning!"</p>
            <p className="text-[#D4AF37] font-bold">- Priya P.</p>
          </div>
          <div className="bg-white/5 p-8 rounded border border-white/5 hover:border-[#D4AF37]/40 transition">
            <p className="text-gray-300 font-light italic mb-6">"Best salon in Ahmedabad. The high-contrast aesthetic of the studio is amazing, and the staff is incredibly professional."</p>
            <p className="text-[#D4AF37] font-bold">- Ayesha K.</p>
          </div>
          <div className="bg-white/5 p-8 rounded border border-white/5 hover:border-[#D4AF37]/40 transition">
            <p className="text-gray-300 font-light italic mb-6">"Got ready here for my engagement ceremony. The attention to detail is unmatched. Highly recommended!"</p>
            <p className="text-[#D4AF37] font-bold">- Neha S.</p>
          </div>
        </div>
      </section>

      {/* Booking Form & Contact */}
      <section id="contact" className="py-24 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl text-[#D4AF37] mb-8 font-serif">Reserve Your Spot</h2>
            <BookingForm />
          </div>
          <div className="space-y-8 mt-4 md:pl-10">
            <div>
              <h3 className="text-2xl text-[#D4AF37] mb-3 font-serif">Visit Us</h3>
              <p className="text-gray-300 text-lg">📍 Ahmedabad, Gujarat</p>
            </div>
            <div>
              <h3 className="text-2xl text-[#D4AF37] mb-3 font-serif">Contact</h3>
              <p className="text-gray-300 text-lg">📞 +91 98798 86910</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black py-12 px-6 text-center border-t border-white/10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4 tracking-widest font-serif">LUSCIOUS</h2>
          <p className="text-gray-500 font-light text-sm">&copy; {new Date().getFullYear()} Luscious Salon & Bridal Studio. All rights reserved.</p>
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#D4AF37] outline-none transition" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input type="tel" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#D4AF37] outline-none transition" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      <select required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#D4AF37] outline-none transition" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
        <option value="" className="text-black">Select Service</option>
        <option value="Bridal Makeup" className="text-black">Bridal Makeup</option>
        <option value="Engagement & Pre-Bridal" className="text-black">Engagement & Pre-Bridal</option>
        <option value="Premium Salon Services" className="text-black">Premium Salon Services</option>
      </select>
      <input type="date" required className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#D4AF37] outline-none transition" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
      <button type="submit" className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded hover:bg-white transition text-lg mt-4">Confirm Booking</button>
      {status && <p className="text-[#D4AF37] mt-3 font-medium">{status}</p>}
    </form>
  );
}
