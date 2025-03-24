
import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Phone, Mail, MapPin, Clock, Calendar, Send } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    date: "",
    time: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        date: "",
        time: ""
      });
      setFormSubmitted(false);
    }, 5000);
  };
  
  const contactInfo = [
    {
      icon: <Phone size={24} className="text-spa-sage" />,
      title: "Phone",
      details: ["+254 710 464 858"],
      action: {
        text: "Call us",
        link: "tel:+254710464858"
      }
    },
    {
      icon: <Mail size={24} className="text-spa-sage" />,
      title: "Email",
      details: ["info@serenespa.com", "bookings@serenespa.com"],
      action: {
        text: "Email us",
        link: "mailto:info@serenespa.com"
      }
    },
    {
      icon: <MapPin size={24} className="text-spa-sage" />,
      title: "Location",
      details: ["Westlands, Nairobi", "Kenya"],
      action: {
        text: "Get directions",
        link: "https://maps.google.com"
      }
    },
    {
      icon: <Clock size={24} className="text-spa-sage" />,
      title: "Opening Hours",
      details: ["Mon-Fri: 9:00 AM - 9:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"],
      action: {
        text: "Book appointment",
        link: "#booking-form"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-spa-light">
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-spa-sage/10 blur-3xl" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-spa-warm/10 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-spa-sage/10 text-spa-sage text-xs font-medium mb-6 animate-fade-in">
                Get In Touch
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-fade-in">
                Contact & Bookings
              </h1>
              <p className="text-spa-charcoal/70 md:text-lg mb-8 animate-fade-in">
                Have questions or ready to book your spa experience? 
                Reach out to our team for personalized assistance and appointment scheduling.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 opacity-0"
                  style={{ animation: `fadeIn 0.8s ease-out ${index * 150}ms forwards` }}
                >
                  <div className="w-12 h-12 bg-spa-sage/10 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-2">{item.title}</h3>
                  <div className="space-y-1 mb-4">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-spa-charcoal/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <a 
                    href={item.action.link} 
                    className="inline-flex items-center text-spa-sage hover:underline"
                  >
                    {item.action.text}
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form and Map */}
        <section className="py-16 md:py-24 bg-spa-cream/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Form */}
                <div className="p-8 md:p-12" id="booking-form">
                  <h2 className="text-3xl font-serif font-medium mb-6">
                    Book an Appointment
                  </h2>
                  <p className="text-spa-charcoal/70 mb-8">
                    Fill out the form below to schedule your spa treatment. Our team will 
                    confirm your booking within 24 hours.
                  </p>
                  
                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <svg 
                        className="w-12 h-12 mx-auto text-green-500 mb-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <h3 className="text-xl font-medium text-green-800 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-green-700">
                        Your booking request has been received. We'll contact you shortly to confirm your appointment.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label 
                            htmlFor="name" 
                            className="block text-sm font-medium text-spa-charcoal mb-2"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-spa-charcoal mb-2"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label 
                            htmlFor="phone" 
                            className="block text-sm font-medium text-spa-charcoal mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                            placeholder="Your phone"
                          />
                        </div>
                        <div>
                          <label 
                            htmlFor="service" 
                            className="block text-sm font-medium text-spa-charcoal mb-2"
                          >
                            Service
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                          >
                            <option value="">Select a service</option>
                            <option value="Swedish Massage">Swedish Massage</option>
                            <option value="Deep Tissue Massage">Deep Tissue Massage</option>
                            <option value="Aromatherapy Facial">Aromatherapy Facial</option>
                            <option value="Hot Stone Therapy">Hot Stone Therapy</option>
                            <option value="Body Scrub & Wrap">Body Scrub & Wrap</option>
                            <option value="Steam Bath & Sauna">Steam Bath & Sauna</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label 
                            htmlFor="date" 
                            className="block text-sm font-medium text-spa-charcoal mb-2"
                          >
                            Preferred Date
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              id="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                            />
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-spa-sage/50 pointer-events-none" size={18} />
                          </div>
                        </div>
                        <div>
                          <label 
                            htmlFor="time" 
                            className="block text-sm font-medium text-spa-charcoal mb-2"
                          >
                            Preferred Time
                          </label>
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                          >
                            <option value="">Select a time</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="message" 
                          className="block text-sm font-medium text-spa-charcoal mb-2"
                        >
                          Special Requests
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50 resize-none"
                          placeholder="Any special requirements or preferences..."
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-3 bg-spa-sage text-white rounded-lg hover:bg-spa-sage/90 transition-colors duration-300 flex items-center justify-center"
                      >
                        <Send size={18} className="mr-2" />
                        Submit Booking Request
                      </button>
                    </form>
                  )}
                </div>
                
                {/* Map and WhatsApp Info */}
                <div className="relative">
                  <div className="absolute inset-0 bg-spa-charcoal/5">
                    {/* For a real application, embed a Google Map here */}
                    <div className="h-full w-full bg-spa-charcoal/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <MapPin size={48} className="text-spa-sage mx-auto mb-4" />
                        <h3 className="text-2xl font-serif font-medium mb-2">
                          Find Us
                        </h3>
                        <p className="text-spa-charcoal/70">
                          Westlands, Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 mr-5">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">
                          Quick Response on WhatsApp
                        </h3>
                        <p className="text-spa-charcoal/70 mb-4">
                          Need immediate assistance? Chat with us on WhatsApp for quick responses and bookings.
                        </p>
                        <a 
                          href="https://wa.me/254710464858" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-[#25D366] text-white px-5 py-2 rounded-lg hover:bg-[#22c15e] transition-colors duration-300"
                        >
                          <span>Chat on WhatsApp</span>
                          <svg 
                            className="w-4 h-4 ml-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M17 8l4 4m0 0l-4 4m4-4H3" 
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
