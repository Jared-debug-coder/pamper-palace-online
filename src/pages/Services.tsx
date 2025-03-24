
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Calendar, Clock, Check, ArrowRight } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  benefits: string[];
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ 
  title, description, price, duration, image, benefits, delay 
}) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col opacity-0"
      style={{ animation: `fadeIn 0.8s ease-out ${delay}ms forwards` }}
    >
      <div className="aspect-[3/2] w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-serif font-medium">{title}</h3>
          <span className="text-spa-sage font-medium">{price}</span>
        </div>
        <p className="text-spa-charcoal/70 text-sm mb-4">{description}</p>
        <div className="flex items-center text-sm text-spa-charcoal/60 mb-4">
          <Clock size={16} className="mr-2" />
          {duration}
        </div>
        <div className="mb-5 flex-grow">
          <h4 className="text-sm font-medium mb-2">Benefits:</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-sm">
                <Check size={16} className="text-spa-sage mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-spa-charcoal/70">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link 
          to="/contact" 
          className="mt-auto btn btn-outline w-full justify-center"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Swedish Massage",
      description: "A gentle full body massage designed to improve circulation, ease tension, and create a sense of relaxation and well-being.",
      price: "KSh 4,500",
      duration: "60 minutes",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Reduces stress and anxiety",
        "Improves circulation",
        "Relieves muscle tension",
        "Promotes relaxation"
      ],
      delay: 100
    },
    {
      title: "Deep Tissue Massage",
      description: "Targets the deeper layers of muscle and connective tissue, ideal for chronic aches, pain and contracted areas.",
      price: "KSh 5,500",
      duration: "75 minutes",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Alleviates chronic pain",
        "Breaks down scar tissue",
        "Improves posture",
        "Increases range of motion"
      ],
      delay: 200
    },
    {
      title: "Aromatherapy Facial",
      description: "A luxurious facial treatment using essential oils to rejuvenate and nourish your skin while promoting relaxation.",
      price: "KSh 6,000",
      duration: "90 minutes",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Deep cleansing and exfoliation",
        "Hydrates and revitalizes skin",
        "Reduces fine lines",
        "Promotes radiant complexion"
      ],
      delay: 300
    },
    {
      title: "Hot Stone Therapy",
      description: "Smooth, heated stones are placed on key points of the body to warm and relax tight muscles and balance energy centers.",
      price: "KSh 7,000",
      duration: "90 minutes",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Releases deep muscle tension",
        "Improves blood flow",
        "Reduces stress and anxiety",
        "Promotes deep relaxation"
      ],
      delay: 400
    },
    {
      title: "Body Scrub & Wrap",
      description: "A full-body exfoliation followed by a nourishing body wrap to detoxify and hydrate your skin.",
      price: "KSh 8,000",
      duration: "120 minutes",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Exfoliates and softens skin",
        "Removes dead skin cells",
        "Detoxifies the body",
        "Improves skin tone and texture"
      ],
      delay: 500
    },
    {
      title: "Steam Bath & Sauna",
      description: "Experience the cleansing and relaxing effects of our premium steam bath and sauna facilities.",
      price: "KSh 3,000",
      duration: "45 minutes",
      image: "https://images.unsplash.com/photo-1613425653628-23603f910ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Opens pores and cleanses skin",
        "Relieves muscle soreness",
        "Improves circulation",
        "Reduces stress"
      ],
      delay: 600
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
                Our Treatments
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-fade-in">
                Premium Spa Services
              </h1>
              <p className="text-spa-charcoal/70 md:text-lg mb-8 animate-fade-in">
                Discover our comprehensive range of professional spa treatments designed to 
                revitalize your body and mind. Each service is performed by our highly trained therapists 
                using premium products for an exceptional experience.
              </p>
              <div className="animate-fade-in">
                <Link 
                  to="/contact" 
                  className="btn btn-primary rounded-full px-8 py-3 h-auto text-base inline-flex items-center"
                >
                  Book an Appointment
                  <Calendar size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-spa-sage/10">
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-spa-sage/10 blur-3xl" />
              
              <div className="flex flex-col md:flex-row md:items-center relative">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                    Customize Your Spa Experience
                  </h2>
                  <p className="text-spa-charcoal/70 mb-6">
                    Looking for something specific or want to combine treatments? We offer customized 
                    packages tailored to your needs. Contact us to create your perfect spa day.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/contact" 
                      className="btn btn-primary rounded-full px-8 py-3 h-auto text-base inline-flex items-center"
                    >
                      Inquire Now
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                    <a 
                      href="tel:+254710464858" 
                      className="btn btn-outline rounded-full px-8 py-3 h-auto text-base"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
                <div className="md:w-1/3 relative">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Spa treatments" 
                      className="w-full h-full object-cover"
                    />
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

export default Services;
