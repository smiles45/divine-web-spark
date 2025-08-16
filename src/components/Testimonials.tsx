import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Church Member",
      content: "Gospel Impact Church has transformed my life. The teachings are profound and the community is so welcoming. I've found my spiritual home here.",
      rating: 5
    },
    {
      name: "John Kamau",
      role: "Youth Leader",
      content: "The pastoral care and guidance I've received here is incredible. Pastor's messages always speak directly to my heart and life situations.",
      rating: 5
    },
    {
      name: "Grace Nyambura",
      role: "Women's Ministry",
      content: "I love how this church combines deep Biblical teaching with practical life application. The fellowship here is genuine and life-changing.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 animate-fade-in">
            What Our Family Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Hear from our church family about their journey of faith and transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-blessed transition-all duration-300 animate-fade-in hover-scale border-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-gold opacity-60" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-primary/10 pt-4">
                  <h4 className="font-serif font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gold">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;