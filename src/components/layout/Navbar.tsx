
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold tracking-tighter">
              <span className="text-spa-sage">Serene</span>
              <span className="text-spa-charcoal">Spa</span>
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`nav-link ${isActive(link.path) ? "text-spa-sage after:w-full" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Account and Cart */}
          <div className="hidden md:flex items-center space-x-5">
            <Link 
              to="/account" 
              className="relative text-spa-charcoal hover:text-spa-sage transition-colors duration-200"
              aria-label="User Account"
            >
              <User size={20} />
            </Link>
            <Link 
              to="/products" 
              className="relative text-spa-charcoal hover:text-spa-sage transition-colors duration-200"
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-spa-sage text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/login" className="btn btn-outline text-xs">
              Login
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-spa-charcoal focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <div className="space-y-8 flex flex-col">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xl ${isActive(link.path) ? "text-spa-sage" : "text-spa-charcoal"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/account" className="text-xl text-spa-charcoal">Account</Link>
            <Link to="/login" className="btn btn-primary mt-4 w-full justify-center">
              Login
            </Link>
          </div>
          <div className="mt-auto pb-10">
            <p className="text-sm text-spa-charcoal/70">
              &copy; {new Date().getFullYear()} SereneSpa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
