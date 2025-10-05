import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookNowClick: () => void;
}

export default function Header({ onBookNowClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl sm:text-2xl font-semibold text-black hover:text-[#40E0D0] transition-colors"
          >
            Michelle
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-black hover:text-[#40E0D0] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-black hover:text-[#40E0D0] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-black hover:text-[#40E0D0] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-black hover:text-[#40E0D0] transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-black hover:text-[#40E0D0] transition-colors"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={onBookNowClick}
            className="hidden md:block bg-[#D4AF37] text-black px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
          >
            Book Now
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-black hover:text-[#40E0D0] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-black hover:text-[#40E0D0] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-black hover:text-[#40E0D0] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="block w-full text-left py-2 text-black hover:text-[#40E0D0] transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-black hover:text-[#40E0D0] transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onBookNowClick}
              className="w-full bg-[#D4AF37] text-black px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all mt-4"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
