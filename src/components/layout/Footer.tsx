
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spa-charcoal text-white pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <h3 className="text-2xl font-serif font-medium text-white">
              <span className="text-spa-sage">Serene</span>Spa
            </h3>
            <p className="text-white/80 text-sm max-w-xs">
              Discover tranquility and rejuvenation at Nairobi's premier spa destination, where luxury meets wellness.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-spa-sage transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-spa-sage transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-spa-sage transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-spa-sage transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-spa-sage transition-colors duration-300 text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-spa-sage transition-colors duration-300 text-sm">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-spa-sage transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-white/70 hover:text-spa-sage transition-colors duration-300 text-sm">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-5 text-white">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-spa-sage mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Phone</p>
                  <a href="tel:+254710464858" className="text-white hover:text-spa-sage transition-colors duration-300">
                    +254 710 464 858
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-spa-sage mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a href="mailto:info@serenespa.com" className="text-white hover:text-spa-sage transition-colors duration-300">
                    info@serenespa.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-spa-sage mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Location</p>
                  <p className="text-white">Westlands, Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-medium mb-5 text-white">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span className="text-white/70">Monday - Friday</span>
                <span className="text-white">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/70">Saturday</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/70">Sunday</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <div className="mt-5">
              <a 
                href="https://wa.me/254710464858" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-spa-sage transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} SereneSpa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
