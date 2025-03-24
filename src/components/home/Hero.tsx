
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        const parallaxAmount = scrollY * 0.2;
        imageRef.current.style.transform = `translateY(${parallaxAmount}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-52 lg:pb-40">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-spa-cream">
        <div 
          ref={imageRef}
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.06
          }}
        />
        <div className="absolute -top-28 -right-28 w-96 h-96 bg-spa-sage opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-spa-warm opacity-10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-spa-sage/10 text-spa-sage text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-spa-sage mr-2"></span>
              Premium Spa Experience in Nairobi
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
              Discover a Haven of <br />
              <span className="text-spa-sage">Serenity & Wellness</span>
            </h1>
            <p className="text-spa-charcoal/80 text-lg md:text-xl mb-8 max-w-xl">
              Indulge in a world of relaxation with our premium spa treatments, bringing balance to your body, mind, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="btn btn-primary rounded-full px-8 py-3 h-auto text-base"
              >
                Explore Our Services
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-outline rounded-full px-8 py-3 h-auto text-base"
              >
                Book Appointment
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                alt="Woman enjoying spa treatment"
                className="w-full h-full object-cover image-fade-in"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -left-8 md:-left-16 glass-card p-5 shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="bg-spa-sage/20 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#AFC9B9"/>
                  </svg>
                </div>
                <div>
                  <p className="text-spa-charcoal font-medium">Trusted by</p>
                  <p className="text-spa-charcoal/70 text-sm">5,000+ customers</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-5 md:-right-10 glass-card p-5 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center space-x-3">
                <div className="bg-spa-sage/20 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#AFC9B9"/>
                  </svg>
                </div>
                <div>
                  <p className="text-spa-charcoal font-medium">5-Star Rated</p>
                  <p className="text-spa-charcoal/70 text-sm">Premium experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
