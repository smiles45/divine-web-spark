import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, HandHeart, Book, Users, Music } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Music className="h-8 w-8 text-gold" />,
      title: "Sunday Worship Service",
      description: "Join us for inspiring worship, powerful preaching, and community fellowship.",
      time: "Service Times Available",
      highlight: true
    },
    {
      icon: <HandHeart className="h-8 w-8 text-gold" />,
      title: "Prayer Meetings",
      description: "We rule through prayers! Join our dedicated prayer sessions.",
      time: "Always Open for Prayer",
      highlight: false
    },
    {
      icon: <Book className="h-8 w-8 text-gold" />,
      title: "Bible Study",
      description: "Deepen your understanding of God's Word through interactive Bible study.",
      time: "Weekly Sessions",
      highlight: false
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: "Fellowship Gatherings",
      description: "Build lasting relationships with fellow believers in Christ.",
      time: "Community Events",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-peace">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-scripture-dark mb-6">
              Our Services & Ministries
            </h2>
            <div className="w-24 h-1 bg-gradient-golden mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-scripture-dark/80 max-w-3xl mx-auto leading-relaxed">
              Experience God's presence through our various worship services and ministries 
              designed to nurture your spiritual growth and strengthen your faith.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-divine transition-all duration-300 border-0 ${
                  service.highlight 
                    ? 'bg-gradient-divine text-primary-foreground shadow-blessed' 
                    : 'bg-dove/80'
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="group-hover:animate-float">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className={`font-serif text-xl ${
                        service.highlight ? 'text-primary-foreground' : 'text-scripture-dark'
                      }`}>
                        {service.title}
                      </CardTitle>
                      <div className={`flex items-center space-x-2 mt-2 ${
                        service.highlight ? 'text-gold' : 'text-gold'
                      }`}>
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">{service.time}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`leading-relaxed ${
                    service.highlight ? 'text-primary-foreground/90' : 'text-scripture-dark/80'
                  }`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Times Highlight */}
          <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <Calendar className="h-12 w-12 text-gold mx-auto mb-6" />
              <h3 className="font-serif font-bold text-3xl text-scripture-dark mb-6">
                Always Welcome
              </h3>
              <p className="text-xl text-scripture-dark/80 mb-6 leading-relaxed">
                Our church doors are always open for worship, prayer, and fellowship. 
                Come as you are and experience the love of Christ in our community.
              </p>
              <div className="bg-dove/80 rounded-lg p-6 max-w-md mx-auto">
                <h4 className="font-serif font-semibold text-lg text-scripture-dark mb-3">
                  Contact us for service times
                </h4>
                <p className="text-scripture-dark/70">
                  Call us at <span className="font-semibold text-primary">0725 586742</span><br />
                  or visit us in Nakuru, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;