
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../contexts/CartContext";
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft, CreditCard } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      setIsProcessing(false);
      navigate("/");
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif font-medium">Your Cart</h1>
            <Link 
              to="/products"
              className="flex items-center text-spa-charcoal hover:text-spa-sage transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
          
          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  {items.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex flex-col sm:flex-row border-b border-gray-100 p-4 sm:p-6"
                    >
                      <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-spa-light rounded-lg overflow-hidden mb-4 sm:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1633555086765-f3a600f7b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                          }}
                        />
                      </div>
                      
                      <div className="flex-grow sm:ml-6 flex flex-col sm:flex-row justify-between">
                        <div>
                          <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                          <p className="text-spa-charcoal/70 text-sm">KSh {item.price.toLocaleString()}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4 sm:mt-0">
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <button 
                              className="px-3 py-1 text-spa-charcoal/70 hover:text-spa-charcoal"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-1 min-w-[40px] text-center">{item.quantity}</span>
                            <button 
                              className="px-3 py-1 text-spa-charcoal/70 hover:text-spa-charcoal"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button 
                            className="ml-4 text-red-500 hover:text-red-600 transition-colors"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
                  <h3 className="text-xl font-medium mb-4">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-spa-charcoal/70">Subtotal ({totalItems} items)</span>
                      <span>KSh {totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-spa-charcoal/70">Shipping</span>
                      <span>{totalPrice >= 5000 ? "Free" : "KSh 500"}</span>
                    </div>
                    <div className="border-t border-gray-100 pt-3 flex justify-between font-medium">
                      <span>Total</span>
                      <span>KSh {(totalPrice + (totalPrice >= 5000 ? 0 : 500)).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <button 
                    className={`w-full flex items-center justify-center bg-spa-sage text-white py-3 px-6 rounded-md transition-colors ${
                      isProcessing 
                        ? "opacity-70 cursor-not-allowed" 
                        : "hover:bg-spa-sage/90"
                    }`}
                    onClick={handleCheckout}
                    disabled={isProcessing || items.length === 0}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard size={20} className="mr-2" />
                        Checkout
                      </>
                    )}
                  </button>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-medium mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded-lg flex items-center">
                      <div className="h-8 w-12 bg-gray-200 rounded mr-3"></div>
                      <span>M-Pesa</span>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg flex items-center">
                      <div className="h-8 w-12 bg-gray-200 rounded mr-3"></div>
                      <span>Credit/Debit Card</span>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg flex items-center">
                      <div className="h-8 w-12 bg-gray-200 rounded mr-3"></div>
                      <span>Cash on Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="flex justify-center mb-6">
                <ShoppingBag size={64} className="text-spa-sage/30" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-spa-charcoal/70 mb-8">
                Add some products to your cart to continue shopping.
              </p>
              <Link 
                to="/products"
                className="inline-flex items-center justify-center bg-spa-sage text-white py-3 px-6 rounded-md hover:bg-spa-sage/90 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
