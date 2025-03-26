
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-display font-bold text-tier-slate">
            Tier<span className="text-tier-blue">.5</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-10">
              <a href="#features" className="text-tier-slate/80 hover:text-tier-blue transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-tier-slate/80 hover:text-tier-blue transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-tier-slate/80 hover:text-tier-blue transition-colors">
                About
              </a>
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-tier-slate"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass mt-4 py-6 px-4 rounded-lg animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-tier-slate/80 hover:text-tier-blue transition-colors py-2 px-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-tier-slate/80 hover:text-tier-blue transition-colors py-2 px-3"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#about" 
                className="text-tier-slate/80 hover:text-tier-blue transition-colors py-2 px-3"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
