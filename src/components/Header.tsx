import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-blessed sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-primary-light/20">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>0725 586742</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Nakuru, Kenya</span>
            </div>
          </div>
          <div className="text-gold">Always Open</div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b2138763-d89d-4885-aa82-5e8f999c9998.png" 
              alt="Gospel Impact Church Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="font-serif font-bold text-lg leading-tight">
                Gospel Impact Church
              </h1>
              <p className="text-gold text-sm">Whitehouse Nakuru</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:text-gold hover:bg-primary-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-light/20">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-gold transition-colors py-2">Home</a>
              <a href="#about" className="hover:text-gold transition-colors py-2">About</a>
              <a href="#services" className="hover:text-gold transition-colors py-2">Services</a>
              <a href="#gallery" className="hover:text-gold transition-colors py-2">Gallery</a>
              <a href="#contact" className="hover:text-gold transition-colors py-2">Contact</a>
              <div className="pt-4 space-y-2 text-sm border-t border-primary-light/20">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>0725 586742</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Nakuru, Kenya</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;