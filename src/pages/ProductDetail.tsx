
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ShoppingBag, ArrowLeft, Star } from "lucide-react";
import { toast } from "sonner";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // This would normally be a fetch from an API
    // For now we'll use the same products data
    const products: ProductProps[] = [
      {
        id: 1,
        name: "Relaxing Lavender Bath Oil",
        description: "Luxurious bath oil infused with pure lavender essential oil to help you unwind and relax. Add a few drops to your bath for a spa-like experience at home. The soothing properties of lavender help calm the mind and body.",
        price: 2500,
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Bath & Body",
        rating: 5
      },
      {
        id: 2,
        name: "Hydrating Face Serum",
        description: "Intensive hydrating serum with hyaluronic acid to plump and moisturize all skin types. This lightweight formula absorbs quickly and provides long-lasting hydration throughout the day.",
        price: 3800,
        image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Skincare",
        rating: 4
      },
      {
        id: 3,
        name: "Eucalyptus Massage Oil",
        description: "Premium massage oil with eucalyptus essential oil to invigorate and refresh sore muscles. Perfect for professional massages or at-home treatments.",
        price: 1800,
        image: "https://images.unsplash.com/photo-1611073761633-0a55b21a5eb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Massage",
        rating: 5
      },
      {
        id: 4,
        name: "Revitalizing Eye Cream",
        description: "Specially formulated cream to reduce dark circles and puffiness around the delicate eye area. Contains caffeine and peptides to brighten and firm.",
        price: 2900,
        image: "https://images.unsplash.com/photo-1614268303585-a2d1408fac52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Skincare",
        rating: 4
      },
      {
        id: 5,
        name: "Detoxifying Clay Mask",
        description: "Deep cleaning mask with bentonite clay to draw out impurities and refine pores. Use weekly for clearer, smoother skin.",
        price: 1500,
        image: "https://images.unsplash.com/photo-1599307767316-736bd6e66201?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Skincare",
        rating: 5
      },
      {
        id: 6,
        name: "Scented Soy Candle",
        description: "Hand-poured soy candle with calming essential oils to create a spa atmosphere at home. Burns cleanly for up to 40 hours.",
        price: 1200,
        image: "https://images.unsplash.com/photo-1599751449918-7e021faa937d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Home",
        rating: 5
      },
      {
        id: 7,
        name: "Exfoliating Body Scrub",
        description: "Gentle exfoliating scrub with natural ingredients to smooth and soften skin. Use twice weekly for best results.",
        price: 1800,
        image: "https://images.unsplash.com/photo-1570194065650-d99195209541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Bath & Body",
        rating: 4
      },
      {
        id: 8,
        name: "Essential Oil Diffuser",
        description: "Elegant ceramic diffuser to disperse your favorite essential oils throughout your home. Features automatic shut-off and color-changing light.",
        price: 3500,
        image: "https://images.unsplash.com/photo-1617219482289-504f36022843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Home",
        rating: 5
      },
      {
        id: 9,
        name: "Anti-Aging Night Cream",
        description: "Rich night cream with retinol and peptides to reduce fine lines and wrinkles while you sleep. Wake up to more youthful-looking skin.",
        price: 4500,
        image: "https://images.unsplash.com/photo-1574333940049-79406de7a72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Skincare",
        rating: 5
      }
    ];
    
    const foundProduct = products.find(p => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/products');
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // Here you would normally update a cart state or make an API call
    toast.success(`Added ${quantity} ${product.name} to your cart`);
    
    // For demo purposes, we'll just show a toast notification
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };
  
  const handleImageError = () => {
    // If image fails to load, we'll use a fallback
    if (product) {
      setProduct({
        ...product,
        image: "https://images.unsplash.com/photo-1633555086765-f3a600f7b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-medium">Loading product...</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/products')}
            className="flex items-center text-spa-charcoal hover:text-spa-sage transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden bg-white p-4 shadow-sm">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-spa-light">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-spa-light">
                    <div className="w-12 h-12 border-4 border-spa-sage border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={handleImageError}
                />
              </div>
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="bg-spa-sage/10 text-spa-sage text-xs font-medium px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={20}
                    className={`${i < product.rating ? "text-spa-gold fill-spa-gold" : "text-gray-300"}`} 
                  />
                ))}
                <span className="ml-2 text-sm text-spa-charcoal/70">
                  {product.rating}.0/5.0
                </span>
              </div>
              
              <div className="text-2xl font-medium mb-6">
                KSh {product.price.toLocaleString()}
              </div>
              
              <p className="text-spa-charcoal/80 mb-8">{product.description}</p>
              
              <div className="flex items-center space-x-4 mb-8">
                <label className="text-sm font-medium">Quantity:</label>
                <div className="flex items-center border border-spa-charcoal/20 rounded-md">
                  <button 
                    className="px-3 py-2 text-spa-charcoal/70 hover:text-spa-charcoal"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-3 py-2 min-w-[40px] text-center">{quantity}</span>
                  <button 
                    className="px-3 py-2 text-spa-charcoal/70 hover:text-spa-charcoal"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex items-center justify-center bg-spa-sage text-white py-3 px-6 rounded-md hover:bg-spa-sage/90 transition-colors"
              >
                <ShoppingBag size={20} className="mr-2" />
                Add to Cart
              </button>
              
              <div className="mt-8 border-t border-spa-charcoal/10 pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Free Delivery</h4>
                    <p className="text-spa-charcoal/70">On orders over KSh 5,000</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Returns</h4>
                    <p className="text-spa-charcoal/70">30 day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
