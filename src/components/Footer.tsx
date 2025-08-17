import { Facebook, Phone, MapPin, Heart, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/b2138763-d89d-4885-aa82-5e8f999c9998.png" 
                alt="Gospel Impact Church Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-serif font-bold text-lg">
                  Gospel Impact Church
                </h3>
                <p className="text-gold text-sm">Whitehouse Nakuru</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              We are a church that believes in Jesus Christ. We rule through prayers! 
              Join us as we impact lives through the transformative power of the Gospel.
            </p>
            <div className="flex items-center space-x-2 text-gold">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Always Open for Prayer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a href="#home" className="block hover:text-gold transition-colors">
                Home
              </a>
              <a href="#about" className="block hover:text-gold transition-colors">
                About Us
              </a>
              <a href="#services" className="block hover:text-gold transition-colors">
                Services & Ministries
              </a>
              <a href="#contact" className="block hover:text-gold transition-colors">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Email Us</p>
                  <a href="mailto:Apostlemwanikijames@gmail.com" className="hover:text-gold transition-colors">
                    Apostlemwanikijames@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Call Us</p>
                  <a href="tel:0725586742" className="hover:text-gold transition-colors">
                    0725 586742
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Call Us</p>
                  <a href="tel:+254704307311" className="hover:text-gold transition-colors">
                    +254 704 307 311
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Call Us</p>
                  <a href="tel:+254724838657" className="hover:text-gold transition-colors">
                    +254 724 838 657
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Location</p>
                  <p>Nakuru, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Follow Us</p>
                  <a 
                    href="https://m.facebook.com/p/Gospel-Impact-Church-Whitehouse-Nakuru-61576923444265/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    Facebook Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © 2024 Gospel Impact Church-Whitehouse Nakuru. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-primary-foreground/70">Made with</span>
              <Heart className="h-4 w-4 text-gold fill-current" />
              <span className="text-primary-foreground/70">for God's glory</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;