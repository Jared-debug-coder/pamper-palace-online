
import React, { useState, useRef, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, name, role, image, rating }) => {
  return (
    <div className="glass-card p-8 h-full flex flex-col">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} className={i < rating ? "text-spa-gold fill-spa-gold" : "text-gray-300"} />
        ))}
      </div>
      <p className="text-spa-charcoal/80 mb-6 flex-grow">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-spa-charcoal">{name}</h4>
          <p className="text-sm text-spa-charcoal/70">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      text: "I've tried many spas in Nairobi, but SereneSpa offers truly exceptional experiences. The therapists are highly skilled, and the ambiance is perfect for relaxation.",
      name: "Ashley Njoki",
      role: "Regular Client",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      text: "The attention to detail at SereneSpa is impressive. From the moment you walk in, you're transported to a world of calm. Their body treatments are absolutely divine!",
      name: "Jared mogonchi",
      role: "Chief Technician",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      text: "As someone who travels frequently, I've experienced spas worldwide. SereneSpa in Nairobi stands out for its professional service and authentic treatments.",
      name: "Eliza Kamami",
      role: "Happy Client",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4
    },
    {
      text: "The products they use are of excellent quality. I particularly love their facials - my skin has never looked better since I started regular treatments here.",
      name: "Lennox Kipruto",
      role: "Marketing Professional",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ];
  
  const next = () => {
    setCurrent((current + 1) % Math.ceil(testimonials.length / 2));
  };
  
  const prev = () => {
    setCurrent((current - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };
  
  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  return (
    <section className="section relative bg-spa-cream overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-64 bg-spa-sage opacity-5 transform -skew-y-6" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-spa-cream/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-spa-sage/10 text-spa-sage text-xs font-medium mb-4">
            <Star size={14} className="mr-1 fill-spa-sage" />
            Testimonials
          </div>
          <h2 className="text-4xl font-serif font-medium mb-4">
            What Our Clients Say
          </h2>
          <p className="text-spa-charcoal/70 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experiences with our services and products.
          </p>
        </div>
        
        {/* Mobile Testimonials (Slider) */}
        <div className="md:hidden relative overflow-hidden">
          <div 
            ref={testimonialRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${testimonials.length * 100}%` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full px-4">
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  current === index ? "bg-spa-sage" : "bg-spa-sage/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop Testimonials (Grid) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="opacity-0"
              style={{ 
                animation: `fadeIn 0.8s ease-out ${index * 200}ms forwards` 
              }}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center mt-12 space-x-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-spa-sage/30 flex items-center justify-center text-spa-sage hover:bg-spa-sage hover:text-white transition-colors duration-300"
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-spa-sage/30 flex items-center justify-center text-spa-sage hover:bg-spa-sage hover:text-white transition-colors duration-300"
            aria-label="Next testimonials"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
