import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Facebook, Send, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-gold" />,
      title: "Email",
      info: "Apostlemwanikijames@gmail.com",
      action: "mailto:Apostlemwanikijames@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: "Phone",
      info: "0725 586742",
      action: "tel:0725586742"
    },
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: "Phone",
      info: "+254 704 307 311",
      action: "tel:+254704307311"
    },
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: "Phone",
      info: "+254 724 838 657",
      action: "tel:+254724838657"
    },
    {
      icon: <MapPin className="h-6 w-6 text-gold" />,
      title: "Location",
      info: "Nakuru, Kenya",
      action: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: "Hours",
      info: "Always Open",
      action: "#"
    },
    {
      icon: <Facebook className="h-6 w-6 text-gold" />,
      title: "Facebook",
      info: "Follow Us",
      action: "https://m.facebook.com/p/Gospel-Impact-Church-Whitehouse-Nakuru-61576923444265/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-scripture-dark mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-golden mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-scripture-dark/80 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions, need prayer, 
              or want to join our church family, don't hesitate to reach out.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="font-serif font-bold text-2xl text-scripture-dark mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-dove/50">
                    <CardContent className="p-6">
                      <a 
                        href={item.action} 
                        className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-300"
                        target={item.title === "Facebook" ? "_blank" : undefined}
                        rel={item.title === "Facebook" ? "noopener noreferrer" : undefined}
                      >
                        <div className="group-hover:animate-float">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-scripture-dark">{item.title}</h4>
                          <p className="text-scripture-dark/70">{item.info}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Church Mission Reminder */}
              <Card className="bg-gradient-divine border-0 shadow-blessed">
                <CardContent className="p-8 text-center text-primary-foreground">
                  <h4 className="font-serif font-semibold text-xl mb-4">
                    Remember Our Mission
                  </h4>
                  <p className="text-lg italic">
                    "We are a church that believes in Jesus Christ. We rule through prayers!"
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="font-serif font-bold text-2xl text-scripture-dark mb-8">
                Send Us a Message
              </h3>
              
              <Card className="shadow-blessed border-0 bg-dove/50">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-scripture-dark mb-2">
                          First Name
                        </label>
                        <Input 
                          placeholder="Your first name"
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-scripture-dark mb-2">
                          Last Name
                        </label>
                        <Input 
                          placeholder="Your last name"
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-scripture-dark mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-scripture-dark mb-2">
                        Phone (Optional)
                      </label>
                      <Input 
                        type="tel"
                        placeholder="Your phone number"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-scripture-dark mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="How can we help you? Share your prayer requests, questions, or how you'd like to get involved..."
                        rows={6}
                        className="border-primary/20 focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-light text-primary-foreground py-6 text-lg font-semibold shadow-blessed hover:shadow-divine transition-all duration-300"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;