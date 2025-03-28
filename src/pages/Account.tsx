
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { 
  User, Settings, LogOut, Calendar, ShoppingBag, Heart, 
  Edit, ChevronRight, ChevronDown, CreditCard, Loader
} from "lucide-react";

// Dummy data for appointments
const appointments = [
  {
    id: "apt1",
    service: "Swedish Massage",
    date: "2025-01-15",
    time: "10:00 AM",
    status: "completed"
  },
  {
    id: "apt2",
    service: "Aromatherapy Facial",
    date: "2025-02-20",
    time: "2:30 PM",
    status: "completed"
  },
  {
    id: "apt3",
    service: "Hot Stone Therapy",
    date: "2025-04-01",
    time: "4:00 PM",
    status: "upcoming"
  }
];

// Dummy data for orders
const orders = [
  {
    id: "ord1",
    date: "2024-05-20",
    total: 4500,
    status: "delivered",
    items: [
      { id: "prod1", name: "Relaxing Lavender Bath Oil", quantity: 1, price: 2500 },
      { id: "prod2", name: "Scented Soy Candle", quantity: 2, price: 1000 }
    ]
  },
  {
    id: "ord2",
    date: "2024-06-15",
    total: 3800,
    status: "delivered",
    items: [
      { id: "prod3", name: "Hydrating Face Serum", quantity: 1, price: 3800 }
    ]
  }
];

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // In a real application, you would check if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [openOrderId, setOpenOrderId] = useState<string | null>(null);
  
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  const toggleOrderDetails = (orderId: string) => {
    setOpenOrderId(openOrderId === orderId ? null : orderId);
  };
  
  const handleLogout = () => {
    // In a real application, you would handle logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 bg-spa-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-spa-sage/10 flex items-center justify-center">
                    <User size={32} className="text-spa-sage" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Liz Njoki</h3>
                    <p className="text-spa-charcoal/70 text-sm">liznjoki2@gmail.com</p>
                  </div>
                </div>
                <hr className="border-spa-sage/10 mb-6" />
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      activeTab === "dashboard" 
                        ? "bg-spa-sage text-white" 
                        : "hover:bg-spa-sage/10 text-spa-charcoal"
                    }`}
                  >
                    <User size={18} />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("appointments")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      activeTab === "appointments" 
                        ? "bg-spa-sage text-white" 
                        : "hover:bg-spa-sage/10 text-spa-charcoal"
                    }`}
                  >
                    <Calendar size={18} />
                    <span>My Appointments</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      activeTab === "orders" 
                        ? "bg-spa-sage text-white" 
                        : "hover:bg-spa-sage/10 text-spa-charcoal"
                    }`}
                  >
                    <ShoppingBag size={18} />
                    <span>Order History</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("favorites")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      activeTab === "favorites" 
                        ? "bg-spa-sage text-white" 
                        : "hover:bg-spa-sage/10 text-spa-charcoal"
                    }`}
                  >
                    <Heart size={18} />
                    <span>Favorites</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      activeTab === "settings" 
                        ? "bg-spa-sage text-white" 
                        : "hover:bg-spa-sage/10 text-spa-charcoal"
                    }`}
                  >
                    <Settings size={18} />
                    <span>Account Settings</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors duration-200"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </nav>
              </div>
              
              {/* Loyalty Points */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-spa-gold">
                <h3 className="font-medium mb-2">Loyalty Program</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-spa-charcoal/70 text-sm">Your Points</span>
                  <span className="font-medium text-spa-gold">650 pts</span>
                </div>
                <div className="w-full bg-spa-sage/10 rounded-full h-2.5 mb-4">
                  <div className="bg-spa-gold h-2.5 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <p className="text-sm text-spa-charcoal/70 mb-4">
                  350 more points until your next free service!
                </p>
                <Link 
                  to="/services" 
                  className="text-sm text-spa-sage hover:underline inline-flex items-center"
                >
                  View rewards
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              {/* Dashboard Tab */}
              {activeTab === "dashboard" && (
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-serif font-medium mb-6">Welcome Back, Liz!</h2>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-spa-sage/10 rounded-xl p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-spa-sage/20 rounded-lg flex items-center justify-center">
                          <Calendar size={24} className="text-spa-sage" />
                        </div>
                        <div>
                          <p className="text-spa-charcoal/70 text-sm">Next Appointment</p>
                          <p className="font-medium">April 10, 2025</p>
                          <p className="text-sm">Hot Stone Therapy</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-spa-warm/10 rounded-xl p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-spa-warm/20 rounded-lg flex items-center justify-center">
                          <ShoppingBag size={24} className="text-spa-warm" />
                        </div>
                        <div>
                          <p className="text-spa-charcoal/70 text-sm">Total Orders</p>
                          <p className="font-medium">2 orders</p>
                          <p className="text-sm">KSh 8,300 spent</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-spa-gold/10 rounded-xl p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-spa-gold/20 rounded-lg flex items-center justify-center">
                          <Heart size={24} className="text-spa-gold" />
                        </div>
                        <div>
                          <p className="text-spa-charcoal/70 text-sm">Loyalty Status</p>
                          <p className="font-medium">Gold Member</p>
                          <p className="text-sm">650 points earned</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Activity */}
                  <h3 className="text-xl font-medium mb-4">Recent Activity</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-4 p-4 rounded-lg border border-spa-sage/10">
                      <div className="w-10 h-10 bg-spa-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar size={20} className="text-spa-sage" />
                      </div>
                      <div>
                        <h4 className="font-medium">Appointment Booked</h4>
                        <p className="text-sm text-spa-charcoal/70">
                          Hot Stone Therapy on March 20, 2025 at 4:00 PM
                        </p>
                        <p className="text-xs text-spa-charcoal/50 mt-1">3 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 rounded-lg border border-spa-sage/10">
                      <div className="w-10 h-10 bg-spa-warm/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <ShoppingBag size={20} className="text-spa-warm" />
                      </div>
                      <div>
                        <h4 className="font-medium">Order Completed</h4>
                        <p className="text-sm text-spa-charcoal/70">
                          Hydrating Face Serum - KSh 3,800
                        </p>
                        <p className="text-xs text-spa-charcoal/50 mt-1">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <h3 className="text-xl font-medium mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link 
                      to="/services" 
                      className="bg-spa-sage text-white px-4 py-3 rounded-lg hover:bg-spa-sage/90 transition-colors duration-300 flex items-center justify-center"
                    >
                      <Calendar size={18} className="mr-2" />
                      Book New Appointment
                    </Link>
                    <Link 
                      to="/products" 
                      className="bg-spa-warm text-white px-4 py-3 rounded-lg hover:bg-spa-warm/90 transition-colors duration-300 flex items-center justify-center"
                    >
                      <ShoppingBag size={18} className="mr-2" />
                      Shop Products
                    </Link>
                  </div>
                </div>
              )}
              
              {/* Appointments Tab */}
              {activeTab === "appointments" && (
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-serif font-medium">My Appointments</h2>
                    <Link 
                      to="/services" 
                      className="bg-spa-sage text-white px-4 py-2 rounded-lg hover:bg-spa-sage/90 transition-colors duration-300 text-sm"
                    >
                      Book New
                    </Link>
                  </div>
                  
                  {appointments.length > 0 ? (
                    <div className="space-y-6">
                      {appointments.map((appointment) => (
                        <div 
                          key={appointment.id}
                          className="border border-spa-sage/10 rounded-lg p-5"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="font-medium text-lg">{appointment.service}</h3>
                              <p className="text-spa-charcoal/70">
                                {new Date(appointment.date).toLocaleDateString('en-US', { 
                                  weekday: 'long',
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })} at {appointment.time}
                              </p>
                            </div>
                            <div className="mt-3 md:mt-0">
                              {appointment.status === "upcoming" ? (
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-spa-sage/10 text-spa-sage text-xs font-medium">
                                  Upcoming
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                                  Completed
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {appointment.status === "upcoming" && (
                              <>
                                <button className="text-spa-sage border border-spa-sage rounded-lg px-4 py-2 text-sm hover:bg-spa-sage/10 transition-colors duration-300">
                                  Reschedule
                                </button>
                                <button className="text-red-500 border border-red-500 rounded-lg px-4 py-2 text-sm hover:bg-red-50 transition-colors duration-300">
                                  Cancel
                                </button>
                              </>
                            )}
                            {appointment.status === "completed" && (
                              <button className="text-spa-charcoal border border-spa-charcoal/30 rounded-lg px-4 py-2 text-sm hover:bg-spa-charcoal/5 transition-colors duration-300">
                                Book Again
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Calendar size={48} className="text-spa-sage/30 mx-auto mb-4" />
                      <h3 className="text-xl font-medium mb-2">No Appointments Yet</h3>
                      <p className="text-spa-charcoal/70 mb-6">
                        You haven't booked any appointments yet. 
                        Start your wellness journey by booking a service.
                      </p>
                      <Link 
                        to="/services" 
                        className="inline-flex items-center bg-spa-sage text-white px-6 py-3 rounded-lg hover:bg-spa-sage/90 transition-colors duration-300"
                      >
                        <Calendar size={18} className="mr-2" />
                        Book Your First Appointment
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-serif font-medium">Order History</h2>
                    <Link 
                      to="/products" 
                      className="bg-spa-sage text-white px-4 py-2 rounded-lg hover:bg-spa-sage/90 transition-colors duration-300 text-sm"
                    >
                      Shop Products
                    </Link>
                  </div>
                  
                  {orders.length > 0 ? (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div 
                          key={order.id}
                          className="border border-spa-sage/10 rounded-lg overflow-hidden"
                        >
                          <div 
                            className="bg-spa-light p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer"
                            onClick={() => toggleOrderDetails(order.id)}
                          >
                            <div>
                              <div className="flex items-center mb-1">
                                <h3 className="font-medium">Order #{order.id}</h3>
                                {order.status === "delivered" && (
                                  <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 text-xs">
                                    Delivered
                                  </span>
                                )}
                                {order.status === "processing" && (
                                  <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs">
                                    Processing
                                  </span>
                                )}
                              </div>
                              <p className="text-spa-charcoal/70 text-sm">
                                {new Date(order.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </p>
                            </div>
                            <div className="mt-4 sm:mt-0 flex items-center">
                              <p className="font-medium text-spa-charcoal">
                                KSh {order.total.toLocaleString()}
                              </p>
                              <ChevronDown 
                                size={20} 
                                className={`ml-2 text-spa-charcoal/70 transition-transform duration-300 ${
                                  openOrderId === order.id ? "transform rotate-180" : ""
                                }`}
                              />
                            </div>
                          </div>
                          
                          {openOrderId === order.id && (
                            <div className="p-5 border-t border-spa-sage/10">
                              <h4 className="font-medium mb-3">Order Items</h4>
                              <div className="space-y-4 mb-6">
                                {order.items.map((item) => (
                                  <div 
                                    key={item.id}
                                    className="flex justify-between items-center"
                                  >
                                    <div className="flex items-center">
                                      <div className="w-12 h-12 bg-spa-sage/10 rounded-lg mr-4"></div>
                                      <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-spa-charcoal/70">
                                          Qty: {item.quantity}
                                        </p>
                                      </div>
                                    </div>
                                    <p className="font-medium">
                                      KSh {item.price.toLocaleString()}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="border-t border-spa-sage/10 pt-4">
                                <div className="flex justify-between mb-2">
                                  <span className="text-spa-charcoal/70">Subtotal:</span>
                                  <span>KSh {order.total.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                  <span className="text-spa-charcoal/70">Shipping:</span>
                                  <span>KSh 0</span>
                                </div>
                                <div className="flex justify-between font-medium text-lg mt-3">
                                  <span>Total:</span>
                                  <span>KSh {order.total.toLocaleString()}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-3 mt-6">
                                <button className="text-spa-sage border border-spa-sage rounded-lg px-4 py-2 text-sm hover:bg-spa-sage/10 transition-colors duration-300">
                                  Track Order
                                </button>
                                <button className="text-spa-charcoal border border-spa-charcoal/30 rounded-lg px-4 py-2 text-sm hover:bg-spa-charcoal/5 transition-colors duration-300">
                                  Buy Again
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <ShoppingBag size={48} className="text-spa-sage/30 mx-auto mb-4" />
                      <h3 className="text-xl font-medium mb-2">No Orders Yet</h3>
                      <p className="text-spa-charcoal/70 mb-6">
                        You haven't placed any orders yet. 
                        Browse our products to find something you'll love.
                      </p>
                      <Link 
                        to="/products" 
                        className="inline-flex items-center bg-spa-sage text-white px-6 py-3 rounded-lg hover:bg-spa-sage/90 transition-colors duration-300"
                      >
                        <ShoppingBag size={18} className="mr-2" />
                        Shop Products
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {/* Favorites Tab */}
              {activeTab === "favorites" && (
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-serif font-medium mb-6">My Favorites</h2>
                  
                  <div className="text-center py-12">
                    <Heart size={48} className="text-spa-sage/30 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Favorites Yet</h3>
                    <p className="text-spa-charcoal/70 mb-6">
                      You haven't added any services or products to your favorites yet.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link 
                        to="/services" 
                        className="inline-flex items-center bg-spa-sage text-white px-6 py-3 rounded-lg hover:bg-spa-sage/90 transition-colors duration-300"
                      >
                        Browse Services
                      </Link>
                      <Link 
                        to="/products" 
                        className="inline-flex items-center bg-spa-warm text-white px-6 py-3 rounded-lg hover:bg-spa-warm/90 transition-colors duration-300"
                      >
                        Browse Products
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-serif font-medium mb-6">Account Settings</h2>
                  
                  <div className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-medium">Personal Information</h3>
                        <button className="text-spa-sage inline-flex items-center text-sm">
                          <Edit size={16} className="mr-1" />
                          Edit
                        </button>
                      </div>
                      <div className="bg-spa-light rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-sm text-spa-charcoal/70 mb-1">Full Name</p>
                            <p className="font-medium">Liz Njoki</p>
                          </div>
                          <div>
                            <p className="text-sm text-spa-charcoal/70 mb-1">Email</p>
                            <p className="font-medium">liznjoki2@gmail.com</p>
                          </div>
                          <div>
                            <p className="text-sm text-spa-charcoal/70 mb-1">Phone</p>
                            <p className="font-medium">+254 723438313</p>
                          </div>
                          <div>
                            <p className="text-sm text-spa-charcoal/70 mb-1">Birth Date</p>
                            <p className="font-medium">May 12, 2004</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Payment Methods */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-medium">Payment Methods</h3>
                        <button className="text-spa-sage inline-flex items-center text-sm">
                          <CreditCard size={16} className="mr-1" />
                          Add New
                        </button>
                      </div>
                      <div className="bg-spa-light rounded-lg p-6">
                        <div className="flex items-center justify-between p-4 border border-spa-sage/10 rounded-lg bg-white mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-8 bg-blue-100 rounded mr-4 flex items-center justify-center text-blue-700 font-medium">
                              Visa
                            </div>
                            <div>
                              <p className="font-medium">•••• •••• •••• 4242</p>
                              <p className="text-sm text-spa-charcoal/70">Expires 10/25</p>
                            </div>
                          </div>
                          <div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-spa-sage/10 text-spa-sage text-xs">
                              Default
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-spa-sage/10 rounded-lg bg-white">
                          <div className="flex items-center">
                            <div className="w-12 h-8 bg-yellow-100 rounded mr-4 flex items-center justify-center text-yellow-700 font-medium">
                              M-Pesa
                            </div>
                            <div>
                              <p className="font-medium">+254 723438313</p>
                              <p className="text-sm text-spa-charcoal/70">Mobile Money</p>
                            </div>
                          </div>
                          <div>
                            <button className="text-spa-charcoal/70 hover:text-spa-charcoal text-sm">
                              Make Default
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Password */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-medium">Password</h3>
                        <button className="text-spa-sage inline-flex items-center text-sm">
                          <Edit size={16} className="mr-1" />
                          Change
                        </button>
                      </div>
                      <div className="bg-spa-light rounded-lg p-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-spa-sage/10 rounded-full flex items-center justify-center mr-4">
                            <svg 
                              className="w-5 h-5 text-spa-sage" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">Password</p>
                            <p className="text-sm text-spa-charcoal/70">Last changed 1 months ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Notifications */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-medium">Notification Preferences</h3>
                      </div>
                      <div className="bg-spa-light rounded-lg p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-spa-charcoal/70">
                              Receive updates about appointments, orders, and promotions
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-spa-charcoal/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-spa-sage rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-spa-sage"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">SMS Notifications</p>
                            <p className="text-sm text-spa-charcoal/70">
                              Receive text message reminders for upcoming appointments
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-spa-charcoal/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-spa-sage rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-spa-sage"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Promotional Emails</p>
                            <p className="text-sm text-spa-charcoal/70">
                              Receive special offers, discounts, and news
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-spa-charcoal/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-spa-sage rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-spa-sage"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
