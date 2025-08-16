import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/5e6986b1-0811-4b66-84da-5c074beb6202.png",
      alt: "Prayer and Worship Moment",
      title: "Devoted in Prayer"
    },
    {
      src: "/lovable-uploads/885c7842-6cbd-4d81-8271-0b44d6d6853f.png",
      alt: "Pastor Preaching",
      title: "Word of God"
    },
    {
      src: "/lovable-uploads/259c96ce-92fe-4298-b7a8-5d68c65e64cb.png",
      alt: "Church Community Gathering",
      title: "Our Church Family"
    },
    {
      src: "/lovable-uploads/7481736a-2733-46ce-82c5-5ff0722fe359.png",
      alt: "Church Members Together",
      title: "United in Faith"
    },
    {
      src: "/lovable-uploads/d936ac81-20a9-4e92-8685-bf3d66942a0b.png",
      alt: "Ministry and Prayer",
      title: "Healing Ministry"
    },
    {
      src: "/lovable-uploads/e7793837-6481-4d02-9a26-c2b33e058cc1.png",
      alt: "Prayer and Blessing",
      title: "God's Blessing"
    },
    {
      src: "/lovable-uploads/c1fe4a53-c3ba-4d81-aff7-1a8af8ce3133.png",
      alt: "Church Service",
      title: "Sunday Service"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-peace">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Church Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Witness the faith, fellowship, and divine moments that make our church family special
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-blessed hover:shadow-divine transition-all duration-500 cursor-pointer animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-divine opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif font-bold text-xl mb-2 animate-scale-in">{image.title}</h3>
                  <p className="text-sm opacity-80">Click to view gallery</p>
                  <div className="mt-3 w-12 h-0.5 bg-gold mx-auto animate-fade-in"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-5xl max-h-full animate-scale-in">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 transition-all duration-200 hover:scale-110"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
              
              {selectedImage > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 transition-all duration-200 hover:scale-110 animate-slide-in-right"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              )}
              
              {selectedImage < galleryImages.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 transition-all duration-200 hover:scale-110 animate-slide-in-right"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              )}

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-divine animate-scale-in"
              />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white bg-gradient-to-t from-black/80 to-transparent px-6 py-4 rounded-xl backdrop-blur-sm animate-fade-in">
                <h3 className="font-serif font-bold text-lg text-gold mb-1">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-sm opacity-90">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
                <div className="w-8 h-0.5 bg-gold mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;