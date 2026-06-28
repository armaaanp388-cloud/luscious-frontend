import React, { useState } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Star } from 'lucide-react';

const WHATSAPP_NUMBER = "919879886910";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function App() {
  const lenis = useLenis(({ scroll }) => {
    // Called every scroll
  });

  return (
    <ReactLenis root>
      <div className="bg-dark text-white font-manrope min-h-screen">
        {/* Navigation */}
        <nav className="fixed w-full flex justify-between items-center p-6 z-50 mix-blend-difference">
          <div className="font-cormorant text-2xl font-bold tracking-widest text-gold">LUSCIOUS</div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-gold transition">Services</a>
            <a href="#portfolio" className="hover:text-gold transition">Portfolio</a>
            <a href="#contact" className="hover:text-gold transition">Book Now</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-cormorant text-6xl md:text-8xl text-gold mb-6"
          >
            Luscious Salon <br/> <span className="text-4xl md:text-6xl text-white">& D's Bridal Studio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl font-light mb-10 max-w-2xl"
          >
            Where luxury meets artistry. Experience the finest in bridal styling and premium salon services.
          </motion.p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-gold text-dark px-8 py-3 rounded-sm font-semibold hover:bg-white transition">
              Book Appointment
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="border border-gold text-gold px-8 py-3 rounded-sm flex items-center gap-2 hover:bg-gold hover:text-dark transition">
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </section>

        {/* Services Split Section */}
        <section id="services" className="py-24 px-6 md:px-20 grid md:grid-cols-2 gap-12 border-t border-white/10">
          <div className="bg-white/5 p-10 rounded-lg hover:bg-white/10 transition">
            <h2 className="font-cormorant text-4xl text-gold mb-4">The Luxurious Salon</h2>
            <p className="font-light text-gray-300 leading-relaxed mb-6">
              Premium haircuts, color transformations, skin rejuvenation, and spa treatments tailored to elevate your everyday elegance.
            </p>
            <ul className="list-disc pl-5 text-gray-400 space-y-2">
              <li>Advanced Hair Coloring</li>
              <li>Keratin & Botox Treatments</li>
              <li>Luxury Facials</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-lg border border-gold/20 hover:bg-white/10 transition">
            <h2 className="font-cormorant text-4xl text-gold mb-4">D's Bridal Studio</h2>
            <p className="font-light text-gray-300 leading-relaxed mb-6">
              Cinematic bridal makeovers. We ensure you look breathtaking on your special day with long-lasting, high-definition makeup.
            </p>
            <ul className="list-disc pl-5 text-gray-400 space-y-2">
              <li>HD & Airbrush Bridal Makeup</li>
              <li>Pre-Bridal Packages</li>
              <li>Grooming & Draping</li>
            </ul>
          </div>
        </section>

        {/* Booking Form & Contact Section */}
        <section id="contact" className="py-24 px-6 md:px-20 bg-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            
            {/* Form */}
            <div>
              <h2 className="font-cormorant text-5xl text-gold mb-8">Reserve Your Spot</h2>
              <BookingForm />
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-gold font-cormorant mb-2">Visit Us</h3>
                <p className="text-gray-300 flex items-center gap-3"><MapPin size={20}/> Ahmedabad, Gujarat</p>
              </div>
              <div>
                <h3 className="text-xl text-gold font-cormorant mb-2">Contact</h3>
                <p className="text-gray-300 flex items-center gap-3"><Phone size={20}/> +91 98798 86910</p>
              </div>
              
              {/* Google Map Embed (Placeholder URL) */}
              <div className="w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
                 <iframe 
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0123!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                 </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-black/50 hover:scale-110 transition z-50">
          <MessageCircle size={30} />
        </a>
      </div>
    </ReactLenis>
  );
}

// Separate component for the Form to handle state
function BookingForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      // Ensure backend is running on this port, or use relative URL in production
      const response = await fetch('http://localhost:8000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Booking Successful! We will contact you soon.');
        setFormData({ name: '', phone: '', service: '', date: '' });
      } else {
        setStatus('Something went wrong. Please try WhatsApp.');
      }
    } catch (error) {
      setStatus('Server error. Please use WhatsApp to book.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input 
        type="text" placeholder="Full Name" required
        className="w-full bg-white/5 border border-white/10 p-4 rounded focus:outline-none focus:border-gold text-white"
        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input 
        type="tel" placeholder="Phone Number" required
        className="w-full bg-white/5 border border-white/10 p-4 rounded focus:outline-none focus:border-gold text-white"
        value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      <select 
        className="w-full bg-white/5 border border-white/10 p-4 rounded focus:outline-none focus:border-gold text-white appearance-none"
        value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} required
      >
        <option value="" className="text-black">Select Service</option>
        <option value="Bridal Makeup" className="text-black">Bridal Makeup</option>
        <option value="Salon Services" className="text-black">Premium Salon Services</option>
      </select>
      <input 
        type="date" required
        className="w-full bg-white/5 border border-white/10 p-4 rounded focus:outline-none focus:border-gold text-white"
        value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
      />
      <button type="submit" className="w-full bg-gold text-dark font-bold text-lg py-4 rounded hover:bg-white transition">
        Confirm Booking
      </button>
      {status && <p className="text-gold mt-4 font-light">{status}</p>}
    </form>
  );
        }
    
