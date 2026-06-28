import React, { useState } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Star } from 'lucide-react';

const WHATSAPP_NUMBER = "919879886910";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function App() {
  useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="bg-dark text-white font-manrope min-h-screen">
        {/* Navigation */}
        <nav className="fixed w-full flex justify-between items-center p-6 z-50 mix-blend-difference">
          <div className="font-cormorant text-2xl font-bold tracking-widest text-gold">LUSCIOUS</div>
          <div className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-gold transition">Services</a>
            <a href="#portfolio" className="hover:text-gold transition hidden md:block">Portfolio</a>
            <a href="#contact" className="hover:text-gold transition">Book</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="font-cormorant text-5xl md:text-8xl text-gold mb-6 leading-tight"
          >
            Luscious Salon <br/> <span className="text-3xl md:text-6xl text-white">& D's Bridal Studio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
            className="text-md md:text-xl font-light mb-10 max-w-2xl text-gray-300"
          >
            Where luxury meets artistry. Experience the finest in bridal styling and premium salon services.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#contact" className="bg-gold text-dark px-8 py-3 rounded-sm font-semibold hover:bg-white transition text-center">
              Book Appointment
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="border border-gold text-gold px-8 py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-gold hover:text-dark transition">
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-8 border-t border-white/10">
          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition border border-transparent hover:border-gold/30">
            <h2 className="font-cormorant text-3xl text-gold mb-4">The Luxurious Salon</h2>
            <p className="font-light text-gray-300 mb-6">Premium haircuts, color transformations, and spa treatments tailored to elevate your elegance.</p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Advanced Hair Coloring</li>
              <li>• Keratin & Botox Treatments</li>
              <li>• Luxury Facials</li>
            </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-lg border border-gold/20 hover:bg-white/10 transition">
            <h2 className="font-cormorant text-3xl text-gold mb-4">D's Bridal Studio</h2>
            <p className="font-light text-gray-300 mb-6">Cinematic bridal makeovers. Look breathtaking on your special day with HD makeup.</p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• HD & Airbrush Bridal Makeup</li>
              <li>• Pre-Bridal Packages</li>
              <li>• Grooming & Draping</li>
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 md:px-20 bg-black border-y border-white/10 text-center">
          <h2 className="font-cormorant text-4xl text-gold mb-2">4.8 / 5 Rating</h2>
          <div className="flex justify-center gap-1 text-gold mb-6">
            <Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star size={20} />
          </div>
          <p className="text-gray-300 font-light italic max-w-xl mx-auto">"The HD makeup lasted the entire wedding day without a single crease. Absolutely flawless work! Best salon experience."</p>
        </section>

        {/* Booking Form & Contact */}
        <section id="contact" className="py-20 px-6 md:px-20 bg-dark">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-cormorant text-4xl text-gold mb-6">Reserve Your Spot</h2>
              <BookingForm />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-gold font-cormorant mb-2">Visit Us</h3>
                <p className="text-gray-300 flex items-center gap-2"><MapPin size={18}/> Ahmedabad, Gujarat</p>
              </div>
              <div>
                <h3 className="text-xl text-gold font-cormorant mb-2">Contact</h3>
                <p className="text-gray-300 flex items-center gap-2"><Phone size={18}/> +91 98798 86910</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-8 px-6 text-center border-t border-white/10">
          <h2 className="font-cormorant text-2xl font-bold text-gold mb-2">LUSCIOUS</h2>
          <p className="text-gray-500 font-light text-xs">&copy; {new Date().getFullYear()} Luscious Salon & Bridal Studio. All rights reserved.</p>
        </footer>

        {/* Floating WhatsApp Button */}
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-black/50 hover:scale-110 transition z-50">
          <MessageCircle size={28} />
        </a>
      </div>
    </ReactLenis>
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
        setStatus('Booking Successful! We will contact you soon.');
        setFormData({ name: '', phone: '', service: '', date: '' });
      } else {
        setStatus('Error! Please use WhatsApp to book.');
      }
    } catch (error) {
      setStatus('Server error. Please use WhatsApp to book.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-gold outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input type="tel" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-gold outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      <select required className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-gold outline-none appearance-none" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
        <option value="" className="text-black">Select Service</option>
        <option value="Bridal Makeup" className="text-black">Bridal Makeup</option>
        <option value="Salon Services" className="text-black">Premium Salon Services</option>
      </select>
      <input type="date" required className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-gold outline-none" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
      <button type="submit" className="w-full bg-gold text-dark font-bold py-3 rounded hover:bg-white transition">Confirm Booking</button>
      {status && <p className="text-gold mt-2 font-light text-sm">{status}</p>}
    </form>
  );
        }
              
