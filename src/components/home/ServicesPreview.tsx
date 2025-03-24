
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-spa-sage/30 border border-transparent"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fadeIn 0.8s ease-out ${delay}ms forwards`
      }}
    >
      <div className="w-14 h-14 bg-spa-sage/10 rounded-lg flex items-center justify-center text-spa-sage mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-spa-charcoal/70 mb-5 text-base">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center text-spa-sage font-medium text-sm hover:underline"
      >
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

const ServicesPreview = () => {
  const services = [
    {
      title: "Relaxing Massages",
      description: "Experience deep relaxation with our range of therapeutic massage treatments tailored to your needs.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 7C8.67157 7 8 7.67157 8 8.5C8 9.32843 8.67157 10 9.5 10C10.3284 10 11 9.32843 11 8.5C11 7.67157 10.3284 7 9.5 7Z" fill="#AFC9B9"/>
          <path d="M14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7Z" fill="#AFC9B9"/>
          <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" stroke="#AFC9B9" strokeWidth="1.5"/>
          <path d="M5.75 14C5.33579 14 5 14.3358 5 14.75C5 15.1642 5.33579 15.5 5.75 15.5H18.25C18.6642 15.5 19 15.1642 19 14.75C19 14.3358 18.6642 14 18.25 14H5.75Z" fill="#AFC9B9"/>
          <path d="M5.5 17.75C5.5 17.3358 5.83579 17 6.25 17H17.75C18.1642 17 18.5 17.3358 18.5 17.75C18.5 18.1642 18.1642 18.5 17.75 18.5H6.25C5.83579 18.5 5.5 18.1642 5.5 17.75Z" fill="#AFC9B9"/>
          <path d="M5.75 20C5.33579 20 5 20.3358 5 20.75C5 21.1642 5.33579 21.5 5.75 21.5H18.25C18.6642 21.5 19 21.1642 19 20.75C19 20.3358 18.6642 20 18.25 20H5.75Z" fill="#AFC9B9"/>
        </svg>
      ),
      delay: 100
    },
    {
      title: "Facials & Skincare",
      description: "Revitalize your skin with personalized facial treatments using premium organic products.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#AFC9B9" strokeWidth="1.5"/>
          <path d="M8 15C8.82843 15 9.5 14.3284 9.5 13.5C9.5 12.6716 8.82843 12 8 12C7.17157 12 6.5 12.6716 6.5 13.5C6.5 14.3284 7.17157 15 8 15Z" fill="#AFC9B9"/>
          <path d="M16 15C16.8284 15 17.5 14.3284 17.5 13.5C17.5 12.6716 16.8284 12 16 12C15.1716 12 14.5 12.6716 14.5 13.5C14.5 14.3284 15.1716 15 16 15Z" fill="#AFC9B9"/>
          <path d="M15.5 17C15.5 17.8284 13.9853 18.5 12 18.5C10.0147 18.5 8.5 17.8284 8.5 17" stroke="#AFC9B9" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      delay: 200
    },
    {
      title: "Body Treatments",
      description: "Nourish and rejuvenate your body with our luxurious scrubs, wraps, and specialized treatments.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.5C13.6569 6.5 15 5.15685 15 3.5C15 1.84315 13.6569 0.5 12 0.5C10.3431 0.5 9 1.84315 9 3.5C9 5.15685 10.3431 6.5 12 6.5Z" stroke="#AFC9B9" strokeWidth="1.5"/>
          <path d="M15 9.5H9C7.89543 9.5 7 10.3954 7 11.5V18.5H8V23.5H16V18.5H17V11.5C17 10.3954 16.1046 9.5 15 9.5Z" fill="#AFC9B9" stroke="#AFC9B9" strokeWidth="0.5"/>
        </svg>
      ),
      delay: 300
    },
    {
      title: "Steam Baths & Saunas",
      description: "Cleanse and detoxify with our premium steam and sauna facilities for ultimate relaxation.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 15C4 14.4477 4.44772 14 5 14H19C19.5523 14 20 14.4477 20 15V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V15Z" stroke="#AFC9B9" strokeWidth="1.5"/>
          <path d="M6 11.5C6 11.2239 6.22386 11 6.5 11H8.5C8.77614 11 9 11.2239 9 11.5C9 11.7761 8.77614 12 8.5 12H6.5C6.22386 12 6 11.7761 6 11.5Z" fill="#AFC9B9"/>
          <path d="M11 9.5C11 9.22386 11.2239 9 11.5 9H13.5C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H11.5C11.2239 10 11 9.77614 11 9.5Z" fill="#AFC9B9"/>
          <path d="M15 7.5C15 7.22386 15.2239 7 15.5 7H17.5C17.7761 7 18 7.22386 18 7.5C18 7.77614 17.7761 8 17.5 8H15.5C15.2239 8 15 7.77614 15 7.5Z" fill="#AFC9B9"/>
          <path d="M8 5.5C8 5.22386 8.22386 5 8.5 5H10.5C10.7761 5 11 5.22386 11 5.5C11 5.77614 10.7761 6 10.5 6H8.5C8.22386 6 8 5.77614 8 5.5Z" fill="#AFC9B9"/>
          <path d="M4 4.5C4 4.22386 4.22386 4 4.5 4H6.5C6.77614 4 7 4.22386 7 4.5C7 4.77614 6.77614 5 6.5 5H4.5C4.22386 5 4 4.77614 4 4.5Z" fill="#AFC9B9"/>
        </svg>
      ),
      delay: 400
    }
  ];

  return (
    <section className="section bg-spa-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium mb-4">
            Our Premium Services
          </h2>
          <p className="text-spa-charcoal/70 max-w-2xl mx-auto">
            Discover our range of luxury spa treatments designed to nurture your body and soul, 
            providing the perfect escape from the stresses of everyday life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="btn btn-primary rounded-full px-8 py-3 h-auto text-base inline-flex items-center"
          >
            View All Services
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
