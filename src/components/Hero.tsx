import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30 // Smoother transitions
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const carouselImages = [
    {
      src: "/slide/IMG-20250816-WA0035.jpg",
      alt: "Gospel Impact Church Service",
      title: "Worship and Praise",
      subtitle: "Experience the joy of worship"
    },
    {
      src: "/slide/IMG-20250817-WA0007.jpg",
      alt: "Church Community Gathering",
      title: "Our Church Family",
      subtitle: "United in faith and love"
    },
    {
      src: "/slide/IMG-20250817-WA0037.jpeg",
      alt: "Prayer and Ministry",
      title: "Divine Ministry",
      subtitle: "Touching lives through prayer"
    },
    {
      src: "/slide/IMG-20250816-WA0019.jpg",
      alt: "Church Service",
      title: "Sunday Service",
      subtitle: "Come as you are"
    },
    {
      src: "/slide/IMG-20250817-WA0036.jpg",
      alt: "Church Fellowship",
      title: "Christian Fellowship",
      subtitle: "Growing together in Christ"
    }
  ];

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Enhanced auto-play functionality
  useEffect(() => {
    if (!emblaApi || !isAutoPlaying) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000); // Slightly longer for better readability

    return () => clearInterval(autoplay);
  }, [emblaApi, isAutoPlaying]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentSlide = carouselImages[selectedIndex];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Enhanced Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="embla w-full h-full" ref={emblaRef}>
          <div className="embla__container w-full h-full">
            {carouselImages.map((image, index) => (
              <div key={index} className="embla__slide relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Overlay with enhanced animations */}
      <div className="relative z-10 flex items-center justify-center h-full py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Animated logo */}
            <div className={`mb-4 flex justify-center transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/b2138763-d89d-4885-aa82-5e8f999c9998.png" 
                  alt="Gospel Impact Church Logo" 
                  className="h-24 w-24 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110"
                />
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/30 to-transparent animate-spin-slow opacity-60"></div>
              </div>
            </div>

            {/* Enhanced main heading with staggered animations */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                <span className="block drop-shadow-2xl hover:text-gold/90 transition-colors duration-300">
                  Welcome to
                </span>
                <span className="block text-gold drop-shadow-2xl bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient-x">
                  Gospel Impact Church
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl mt-2 text-gold/90 drop-shadow-lg font-light">
                  Whitehouse Nakuru
                </span>
              </h1>
            </div>

            {/* Current slide title with smooth transitions */}
            <div className={`mb-3 transform transition-all duration-1000 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h2 className="text-xl md:text-2xl font-serif text-gold mb-1 transition-all duration-500">
                {currentSlide?.title}
              </h2>
              <p className="text-base text-white/80 italic">
                {currentSlide?.subtitle}
              </p>
            </div>

            {/* Enhanced mission statement */}
            <div className={`transform transition-all duration-1000 delay-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-lg md:text-xl mb-2 font-serif drop-shadow-lg">
                "We are a church that believes in Jesus Christ."
              </p>
              
              <p className="text-base md:text-lg font-semibold mb-4 drop-shadow-lg text-gold/90">
                We rule through prayers!
              </p>
            </div>

            {/* Enhanced Inspirational Text */}
            <div className={`mb-4 transform transition-all duration-1000 delay-900 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 max-w-3xl mx-auto hover:bg-white/15 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="text-base md:text-lg font-serif italic text-gold drop-shadow-lg relative z-10">
                  "Gospel Impact has given birth to many branches, and those who have affiliated with Gospel Impact have raised many spiritual sons across the world."
                </p>
              </div>
            </div>

            {/* Enhanced call to action buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 transform transition-all duration-1000 delay-1100 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-primary px-8 py-4 text-base font-semibold rounded-full shadow-2xl hover:shadow-gold/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Join Our Service</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More About Us
              </Button> */}
            </div>

            {/* Enhanced service times highlight */}
            <div className={`transform transition-all duration-1000 delay-1300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {/* <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl max-w-sm mx-auto border border-white/20 hover:border-gold/30 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="font-serif font-semibold text-lg mb-2 text-gold relative z-10 flex items-center justify-center">
                  <Heart className="mr-2 h-4 w-4" />
                  Service Times
                </h3>
                <p className="text-white/90 text-base relative z-10">
                  Sunday Worship Service<br />
                  <span className="font-semibold text-gold text-lg mt-1 block">
                    Always Open for Prayer
                  </span>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Carousel Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          <button
            onClick={toggleAutoPlay}
            className="text-white hover:text-gold transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          </button>
          
          <div className="flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === selectedIndex 
                    ? 'bg-gold shadow-lg shadow-gold/50' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Carousel Controls */}
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-20 transition-all duration-300 hover:scale-110 backdrop-blur-sm rounded-full p-2 border border-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-20 transition-all duration-300 hover:scale-110 backdrop-blur-sm rounded-full p-2 border border-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-8 animate-float">
          <Star className="h-6 w-6 text-gold drop-shadow-lg" />
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="h-4 w-4 text-gold drop-shadow-lg" />
        </div>
        <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="h-8 w-8 text-gold drop-shadow-lg" />
        </div>
        <div className="absolute top-1/3 right-8 animate-float" style={{ animationDelay: '3s' }}>
          <Heart className="h-6 w-6 text-gold drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <Star className="h-4 w-4 text-gold drop-shadow-lg" />
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;