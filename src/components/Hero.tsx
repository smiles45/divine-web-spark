import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-peace flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Star className="h-8 w-8 text-gold" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="h-6 w-6 text-gold" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="h-10 w-10 text-gold" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/b2138763-d89d-4885-aa82-5e8f999c9998.png" 
              alt="Gospel Impact Church Logo" 
              className="h-32 w-32 object-contain animate-glow"
            />
          </div>

          {/* Main heading */}
          <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-scripture-dark mb-6 leading-tight">
            Welcome to
            <span className="block text-primary">Gospel Impact Church</span>
            <span className="block text-gold text-3xl md:text-4xl lg:text-5xl mt-2">
              Whitehouse Nakuru
            </span>
          </h1>

          {/* Mission statement */}
          <p className="text-xl md:text-2xl text-scripture-dark/80 mb-4 font-serif">
            "We are a church that believes in Jesus Christ."
          </p>
          
          <p className="text-lg md:text-xl text-primary font-semibold mb-12">
            We rule through prayers!
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-6 text-lg font-semibold shadow-blessed hover:shadow-divine transition-all duration-300"
            >
              Join Our Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gold text-gold hover:bg-gold hover:text-gold-foreground px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Service times highlight */}
          <div className="mt-16 p-6 bg-dove/80 rounded-lg shadow-lg max-w-md mx-auto border-l-4 border-gold">
            <h3 className="font-serif font-semibold text-lg text-scripture-dark mb-2">
              Service Times
            </h3>
            <p className="text-scripture-dark/70">
              Sunday Worship Service<br />
              <span className="font-semibold">Always Open for Prayer</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;