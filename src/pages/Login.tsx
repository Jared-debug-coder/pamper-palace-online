
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    // Simulate login process
    try {
      // In a real application, this would be an API call to your backend
      setTimeout(() => {
        // For demo purposes, any valid-looking email and password will "work"
        if (email.includes('@') && password.length >= 6) {
          // Successful login
          navigate('/account');
        } else {
          // Failed login
          setError('Invalid email or password. Please try again.');
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
                <h1 className="text-3xl font-serif font-medium mb-2">Welcome Back</h1>
                <p className="text-spa-charcoal/70">
                  Sign in to access your account
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
                    htmlFor="email" 
                    className="block text-sm font-medium text-spa-charcoal mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-spa-sage/20 focus:outline-none focus:ring-2 focus:ring-spa-sage/50"
                      placeholder="name@example.com"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spa-charcoal/50" size={18} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label 
                      htmlFor="password" 
                      className="block text-sm font-medium text-spa-charcoal"
                    >
                      Password
                    </label>
                    <Link 
                      to="#" 
                      className="text-sm text-spa-sage hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                </div>
                
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-spa-sage focus:ring-spa-sage/50 border-spa-sage/30 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-spa-charcoal/70">
                    Remember me
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
                      Signing in...
                    </>
                  ) : "Sign In"}
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-spa-sage/10 text-center">
                <p className="text-sm text-spa-charcoal/70">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-spa-sage font-medium hover:underline">
                    Sign up
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

export default Login;
