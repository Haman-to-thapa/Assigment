import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu, X, Ticket } from 'lucide-react';
import { useRaffle } from '../../context/RaffleContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { tickets, loading } = useRaffle();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">KI</span>
            </div>
            <h1 className="font-heading font-bold text-xl text-primary hidden sm:block">
              KonnectImpact
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium transition-colors ${location.pathname === '/'
                ? 'text-primary border-b-2 border-primary'
                : 'text-neutral-dark hover:text-primary'
                }`}
            >
              Dashboard
            </Link>
            <Link
              to="/influencers"
              className={`font-medium transition-colors ${location.pathname === '/influencers'
                ? 'text-primary border-b-2 border-primary'
                : 'text-neutral-dark hover:text-primary'
                }`}
            >
              Influencers
            </Link>
          </nav>

          {/* Raffle Status */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-neutral-light rounded-full px-3 py-1.5 border border-neutral-medium">
              <Ticket size={18} className="text-primary" />
              <span className="text-sm font-medium">
                {loading ? "Loading..." : (
                  tickets > 0
                    ? `${tickets} ticket${tickets !== 1 ? 's' : ''}`
                    : "No tickets"
                )}
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} className="text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-medium animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition-colors ${location.pathname === '/'
                  ? 'text-primary'
                  : 'text-neutral-dark hover:text-primary'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/influencers"
                className={`font-medium transition-colors ${location.pathname === '/influencers'
                  ? 'text-primary'
                  : 'text-neutral-dark hover:text-primary'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Influencers
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;