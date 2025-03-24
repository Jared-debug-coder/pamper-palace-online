
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    // Simulate registration process
    try {
      // In a real application, this would be an API call to your backend
      setTimeout(() => {
        // For demo purposes, any valid-looking form data will "work"
        if (
          formData.name.length >= 2 && 
          formData.email.includes('@') && 
          formData.phone.length >= 10 &&
          formData.password.length >= 6
        ) {
          // Successful registration
          navigate('/account');
        } else {
          // Failed registration
          setError('Please check your information and try again.');
          setIsLoading(false);
        }
      }, 1500);
    } catch (err) {
      setError('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 md:py-24 bg-spa-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 animate-fade-in">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-serif font-medium mb-2">Create Account</h1>
                <p className="text-spa-charcoal/70">
                  Join us for a premium spa experience
                </p>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-spa-charcoal mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                      placeholder="Your name"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spa-charcoal/50" size={18} />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-spa-charcoal mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                      placeholder="name@example.com"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spa-charcoal/50" size={18} />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-spa-charcoal mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                      placeholder="+254 7XX XXX XXX"
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spa-charcoal/50" size={18} />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-spa-charcoal mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                      placeholder="••••••••"
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spa-charcoal/50" size={18} />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-spa-charcoal/50 hover:text-spa-charcoal"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-spa-charcoal/70">
                    Password must be at least 6 characters long
                  </p>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-spa-sage focus:ring-spa-sage/50 border-spa-sage/30 rounded mt-1"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-spa-charcoal/70">
                    I agree to the{" "}
                    <Link to="#" className="text-spa-sage hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-spa-sage hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-spa-sage text-white rounded-lg hover:bg-spa-sage/90 transition-colors duration-300 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : "Create Account"}
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-spa-sage/10 text-center">
                <p className="text-sm text-spa-charcoal/70">
                  Already have an account?{" "}
                  <Link to="/login" className="text-spa-sage font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
