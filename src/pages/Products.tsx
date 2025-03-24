
import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Search, ShoppingBag, Filter, X } from "lucide-react";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  delay: number;
}

const ProductCard: React.FC<ProductProps> = ({ 
  id, name, description, price, image, category, rating, delay 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col opacity-0"
      style={{ animation: `fadeIn 0.8s ease-out ${delay}ms forwards` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square w-full overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-spa-sage/10 text-spa-sage text-xs font-medium px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-medium">{name}</h3>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < rating ? "text-spa-gold fill-spa-gold" : "text-gray-300"}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-spa-charcoal/70 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-spa-charcoal font-medium">KSh {price.toLocaleString()}</span>
          <button 
            className="bg-spa-sage text-white p-2 rounded-full hover:bg-spa-sage/90 transition-colors duration-300"
            aria-label="Add to bag"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  
  const products: ProductProps[] = [
    {
      id: 1,
      name: "Relaxing Lavender Bath Oil",
      description: "Luxurious bath oil infused with pure lavender essential oil to help you unwind and relax.",
      price: 2500,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Bath & Body",
      rating: 5,
      delay: 100
    },
    {
      id: 2,
      name: "Hydrating Face Serum",
      description: "Intensive hydrating serum with hyaluronic acid to plump and moisturize all skin types.",
      price: 3800,
      image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Skincare",
      rating: 4,
      delay: 200
    },
    {
      id: 3,
      name: "Eucalyptus Massage Oil",
      description: "Premium massage oil with eucalyptus essential oil to invigorate and refresh sore muscles.",
      price: 1800,
      image: "https://images.unsplash.com/photo-1611073761633-0a55b21a5eb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Massage",
      rating: 5,
      delay: 300
    },
    {
      id: 4,
      name: "Revitalizing Eye Cream",
      description: "Specially formulated cream to reduce dark circles and puffiness around the delicate eye area.",
      price: 2900,
      image: "https://images.unsplash.com/photo-1614268303585-a2d1408fac52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Skincare",
      rating: 4,
      delay: 400
    },
    {
      id: 5,
      name: "Detoxifying Clay Mask",
      description: "Deep cleaning mask with bentonite clay to draw out impurities and refine pores.",
      price: 1500,
      image: "https://images.unsplash.com/photo-1599307767316-736bd6e66201?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Skincare",
      rating: 5,
      delay: 500
    },
    {
      id: 6,
      name: "Scented Soy Candle",
      description: "Hand-poured soy candle with calming essential oils to create a spa atmosphere at home.",
      price: 1200,
      image: "https://images.unsplash.com/photo-1599751449918-7e021faa937d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Home",
      rating: 5,
      delay: 600
    },
    {
      id: 7,
      name: "Exfoliating Body Scrub",
      description: "Gentle exfoliating scrub with natural ingredients to smooth and soften skin.",
      price: 1800,
      image: "https://images.unsplash.com/photo-1570194065650-d99195209541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Bath & Body",
      rating: 4,
      delay: 700
    },
    {
      id: 8,
      name: "Essential Oil Diffuser",
      description: "Elegant ceramic diffuser to disperse your favorite essential oils throughout your home.",
      price: 3500,
      image: "https://images.unsplash.com/photo-1617219482289-504f36022843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Home",
      rating: 5,
      delay: 800
    },
    {
      id: 9,
      name: "Anti-Aging Night Cream",
      description: "Rich night cream with retinol and peptides to reduce fine lines and wrinkles while you sleep.",
      price: 4500,
      image: "https://images.unsplash.com/photo-1574333940049-79406de7a72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Skincare",
      rating: 5,
      delay: 900
    }
  ];
  
  const categories = ["All", ...new Set(products.map(product => product.category))];
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                Our Collection
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-fade-in">
                Premium Spa Products
              </h1>
              <p className="text-spa-charcoal/70 md:text-lg mb-8 animate-fade-in">
                Take the spa experience home with our curated collection of premium skincare, 
                body care, and wellness products. Each item is carefully selected to provide 
                quality and effective results.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative animate-fade-in">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-spa-sage/20 rounded-full py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-spa-sage" size={18} />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            {/* Category Filter */}
            <div className="mb-10 flex justify-between items-center">
              <div className="hidden md:flex space-x-4 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                      selectedCategory === category
                        ? "bg-spa-sage text-white"
                        : "bg-spa-sage/10 text-spa-charcoal hover:bg-spa-sage/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Mobile Filter Button */}
              <button
                className="md:hidden flex items-center space-x-2 bg-spa-sage/10 text-spa-charcoal px-4 py-2 rounded-full"
                onClick={() => setFilterMenuOpen(true)}
              >
                <Filter size={18} />
                <span>Filter: {selectedCategory}</span>
              </button>
              
              <div className="text-spa-charcoal/70 text-sm">
                Showing {filteredProducts.length} products
              </div>
            </div>
            
            {/* Mobile Filter Menu */}
            {filterMenuOpen && (
              <div className="fixed inset-0 bg-spa-charcoal/50 z-50 md:hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-medium text-lg">Filter Products</h3>
                    <button
                      onClick={() => setFilterMenuOpen(false)}
                      className="text-spa-charcoal/70"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setFilterMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                          selectedCategory === category
                            ? "bg-spa-sage text-white"
                            : "bg-spa-sage/10 text-spa-charcoal"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-spa-charcoal/70">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
