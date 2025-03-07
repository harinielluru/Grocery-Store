import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

// Import different icon set
import { FiMenu, FiSearch, FiShoppingBag, FiUser, FiHeart, FiHome, FiPackage } from "react-icons/fi";
import avatarImg from "../assets/avatar.png";

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);
  const { currentUser, logout } = useAuth();
  const token = localStorage.getItem('token');

  const navLinks = [
    { name: "Home", href: "/", icon: <FiHome className="size-5" /> },
    { name: "Dashboard", href: "/user-dashboard", icon: <FiHome className="size-5" /> },
    { name: "Orders", href: "/orders", icon: <FiPackage className="size-5" /> },
    { name: "Wishlist", href: "/wishlist", icon: <FiHeart className="size-5" /> },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Top bar with logo and icons */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl tracking-tight flex items-center">
            <span className="text-blue-600">Shop</span>
            <span>Smart</span>
          </Link>

          {/* Center search - hidden on mobile */}
          {/* <div className="hidden md:block relative w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div> */}

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile search toggle */}
            <button 
              className="md:hidden" 
              onClick={() => setSearchVisible(!searchVisible)}
            >
              <FiSearch className="size-6" />
            </button>

            {/* Wishlist icon */}
            {/* <Link to="/wishlist" className="hidden sm:block relative">
              <FiHeart className="size-6" />
            </Link> */}

            {/* Cart icon with count */}
            <Link to="/cart" className="relative">
              <FiShoppingBag className="size-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Account */}
            {currentUser ? (
              <div className="relative">
                <button 
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <img 
                    src={avatarImg} 
                    alt="User avatar" 
                    className="size-8 rounded-full border-2 border-blue-500" 
                  />
                </button>
                
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-800">My Account</p>
                      <p className="text-xs text-gray-500 truncate">
                        {currentUser.email || "User"}
                      </p>
                    </div>
                    
                    <div className="py-2">
                      <Link 
                        to="/user-dashboard" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link 
                        to="/orders" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        My Orders
                      </Link>
                      <Link 
                        to="/cart" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        Cart
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setMenuOpen(false);
                        }}
                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="flex items-center">
                <FiUser className="size-6" />
                <span className="hidden md:block ml-1">Login</span>
              </Link>
            )}

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FiMenu className="size-6" />
            </button>
          </div>
        </div>

        {/* Mobile search - only visible when toggled */}
        {searchVisible && (
          <div className="md:hidden py-3 px-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile menu - only visible when toggled */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
              {!currentUser && (
                <li>
                  <Link
                    to="/login"
                    className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mr-3"><FiUser className="size-5" /></span>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;