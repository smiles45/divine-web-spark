import { Card, CardContent } from "@/components/ui/card";
import { Heart, Book, Users, HandHeart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-gold" />,
      title: "Love & Faith",
      description: "We believe in Jesus Christ and His unconditional love for all humanity."
    },
    {
      icon: <HandHeart className="h-8 w-8 text-gold" />,
      title: "Prayer & Worship",
      description: "We rule through prayers, seeking God's guidance in everything we do."
    },
    {
      icon: <Book className="h-8 w-8 text-gold" />,
      title: "Biblical Truth",
      description: "Our foundation is built on the Word of God and scriptural teachings."
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: "Community",
      description: "Building a strong, supportive Christian community in Nakuru."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-scripture-dark mb-6">
              About Our Church
            </h2>
            <div className="w-24 h-1 bg-gradient-golden mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-scripture-dark/80 max-w-3xl mx-auto leading-relaxed">
              Gospel Impact Church-Whitehouse Nakuru is a faith community dedicated to 
              spreading the Gospel of Jesus Christ through prayer, worship, and service 
              to our community in Nakuru, Kenya.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <Card className="bg-gradient-peace border-0 shadow-blessed">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="font-serif font-semibold text-2xl md:text-3xl text-scripture-dark mb-6">
                  Our Mission
                </h3>
                <p className="text-xl md:text-2xl font-serif text-scripture-dark/90 italic leading-relaxed">
                  "To impact lives through the transformative power of the Gospel, 
                  building a community where faith grows, prayers are answered, 
                  and hearts are changed by the love of Jesus Christ."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-divine transition-all duration-300 border-0 bg-dove/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:animate-float">
                    {value.icon}
                  </div>
                  <h4 className="font-serif font-semibold text-xl text-scripture-dark mb-3">
                    {value.title}
                  </h4>
                  <p className="text-scripture-dark/70 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Church History */}
          <div className="mt-16 bg-primary/5 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif font-bold text-3xl text-scripture-dark mb-6">
                  Our Story
                </h3>
                <p className="text-scripture-dark/80 leading-relaxed mb-6">
                  Located in the heart of Nakuru, Kenya, Gospel Impact Church-Whitehouse 
                  has been a beacon of hope and faith in our community. We are committed 
                  to creating an environment where people can encounter God's love and 
                  experience spiritual growth.
                </p>
                <p className="text-scripture-dark/80 leading-relaxed">
                  Our doors are always open, and we welcome everyone who seeks to know 
                  Jesus Christ and grow in their faith journey. Through prayer, worship, 
                  and fellowship, we continue to make a lasting impact in lives.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-divine rounded-lg p-8 text-center text-primary-foreground">
                  <div className="text-4xl font-bold mb-2">∞</div>
                  <h4 className="font-serif font-semibold text-xl mb-2">Always Open</h4>
                  <p className="text-primary-foreground/90">
                    Our church is always open for prayer, worship, and fellowship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;