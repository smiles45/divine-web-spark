import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Calendar, 
  Clock, 
  Heart, 
  Star, 
  BookOpen, 
  Quote, 
  ArrowRight,
  Download,
  Share2,
  Home
} from "lucide-react";

const Sermons = () => {
  const sermons = [
    {
      id: 1,
      title: "We Rule Through Prayers",
      preacher: "Apostle Mwaniki James",
      date: "December 15, 2024",
      duration: "45 min",
      category: "Prayer",
      description: "Discover the power of prayer and how it transforms our lives and communities. Learn the biblical principles of ruling through prayers.",
      image: "/slide/IMG-20250816-WA0035.jpg",
      audioUrl: "#",
      isFeatured: true
    },
    {
      id: 2,
      title: "The Gospel Impact",
      preacher: "Apostle Mwaniki James",
      date: "December 8, 2024",
      duration: "52 min",
      category: "Evangelism",
      description: "Understanding how the Gospel creates lasting impact in our lives and how we can spread this impact to others.",
      image: "/slide/IMG-20250817-WA0007.jpg",
      audioUrl: "#",
      isFeatured: false
    },
    {
      id: 3,
      title: "Walking in Faith",
      preacher: "Apostle Mwaniki James",
      date: "December 1, 2024",
      duration: "38 min",
      category: "Faith",
      description: "A powerful message on living a life of faith and trusting in God's promises through every circumstance.",
      image: "/slide/IMG-20250817-WA0037.jpeg",
      audioUrl: "#",
      isFeatured: false
    },
    {
      id: 4,
      title: "The Power of Unity",
      preacher: "Apostle Mwaniki James",
      date: "November 24, 2024",
      duration: "41 min",
      category: "Community",
      description: "Exploring the strength that comes from unity in Christ and how we can build stronger communities.",
      image: "/slide/IMG-20250816-WA0019.jpg",
      audioUrl: "#",
      isFeatured: false
    },
    {
      id: 5,
      title: "Spiritual Growth",
      preacher: "Apostle Mwaniki James",
      date: "November 17, 2024",
      duration: "47 min",
      category: "Growth",
      description: "Practical steps for spiritual growth and developing a deeper relationship with God.",
      image: "/slide/IMG-20250817-WA0036.jpg",
      audioUrl: "#",
      isFeatured: false
    },
    {
      id: 6,
      title: "God's Grace and Mercy",
      preacher: "Apostle Mwaniki James",
      date: "November 10, 2024",
      duration: "44 min",
      category: "Grace",
      description: "Understanding God's grace and mercy in our daily lives and how to extend it to others.",
      image: "/slide/IMG-20250816-WA0035.jpg",
      audioUrl: "#",
      isFeatured: false
    }
  ];

  const inspirations = [
    {
      id: 1,
      quote: "Gospel Impact has given birth to many branches, and those who have affiliated with Gospel Impact have raised many spiritual sons across the world.",
      author: "Apostle Mwaniki James",
      category: "Vision"
    },
    {
      id: 2,
      quote: "We are a church that believes in Jesus Christ. We rule through prayers!",
      author: "Gospel Impact Church",
      category: "Mission"
    },
    {
      id: 3,
      quote: "Faith is not believing that God can, but knowing that God will.",
      author: "Apostle Mwaniki James",
      category: "Faith"
    },
    {
      id: 4,
      quote: "Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness.",
      author: "Apostle Mwaniki James",
      category: "Prayer"
    }
  ];

  const categories = ["All", "Prayer", "Faith", "Evangelism", "Community", "Growth", "Grace"];

  return (
    <section className="py-20 bg-gradient-peace">
      <div className="container mx-auto px-4">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-300"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-scripture-dark mb-6">
            Sermons & Inspirations
          </h2>
          <div className="w-24 h-1 bg-gradient-golden mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-scripture-dark/80 max-w-3xl mx-auto leading-relaxed">
            Discover powerful messages and divine inspirations that will strengthen your faith and transform your life.
          </p>
        </div>

        {/* Featured Sermon */}
        <div className="mb-16">
          <h3 className="font-serif font-bold text-2xl text-scripture-dark mb-8 text-center">
            Featured Sermon
          </h3>
          {sermons.filter(s => s.isFeatured).map((sermon) => (
            <Card key={sermon.id} className="max-w-4xl mx-auto shadow-blessed border-0 bg-white/80 backdrop-blur-sm hover:shadow-divine transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden rounded-l-lg">
                  <img 
                    src={sermon.image} 
                    alt={sermon.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Button 
                      size="sm" 
                      className="bg-gold hover:bg-gold/90 text-primary rounded-full shadow-lg"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-gold text-primary hover:bg-gold/90">
                    {sermon.category}
                  </Badge>
                  <h4 className="font-serif font-bold text-2xl text-scripture-dark mb-3">
                    {sermon.title}
                  </h4>
                  <p className="text-scripture-dark/70 mb-4 leading-relaxed">
                    {sermon.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-scripture-dark/60 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{sermon.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{sermon.duration}</span>
                    </div>
                  </div>
                  <p className="text-gold font-semibold mb-6">
                    Preached by {sermon.preacher}
                  </p>
                  <div className="flex space-x-3">
                    <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
                      <Play className="mr-2 h-4 w-4" />
                      Listen Now
                    </Button>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sermons.filter(s => !s.isFeatured).map((sermon) => (
            <Card key={sermon.id} className="group hover:shadow-divine transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={sermon.image} 
                  alt={sermon.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gold text-primary hover:bg-gold/90">
                    {sermon.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="bg-white/20 text-white hover:bg-white/30 rounded-full"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Button 
                    size="sm" 
                    className="bg-gold hover:bg-gold/90 text-primary rounded-full shadow-lg"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-serif font-bold text-lg text-scripture-dark mb-2 group-hover:text-gold transition-colors duration-300">
                  {sermon.title}
                </h4>
                <p className="text-scripture-dark/70 text-sm mb-4 line-clamp-2">
                  {sermon.description}
                </p>
                <div className="flex items-center justify-between text-sm text-scripture-dark/60 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{sermon.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{sermon.duration}</span>
                  </div>
                </div>
                <p className="text-gold font-semibold text-sm mb-4">
                  {sermon.preacher}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                >
                  <Play className="mr-2 h-3 w-3" />
                  Listen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inspirations Section */}
        <div className="mb-16">
          <h3 className="font-serif font-bold text-3xl text-scripture-dark mb-8 text-center">
            Daily Inspirations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {inspirations.map((inspiration) => (
              <Card key={inspiration.id} className="bg-gradient-divine border-0 shadow-blessed hover:shadow-divine transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-gold mx-auto opacity-60" />
                  </div>
                  <p className="text-primary-foreground text-lg md:text-xl font-serif italic mb-6 leading-relaxed">
                    "{inspiration.quote}"
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="h-4 w-4 text-gold" />
                    <span className="text-gold font-semibold">{inspiration.author}</span>
                    <Star className="h-4 w-4 text-gold" />
                  </div>
                  <Badge className="mt-4 bg-gold text-primary hover:bg-gold/90">
                    {inspiration.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-blessed">
            <CardContent className="p-8">
              <h3 className="font-serif font-bold text-2xl text-scripture-dark mb-4">
                Stay Connected
              </h3>
              <p className="text-scripture-dark/70 mb-6">
                Subscribe to receive our latest sermons and inspirations directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
                  <Heart className="mr-2 h-4 w-4" />
                  Subscribe to Updates
                </Button>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View All Sermons
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sermons;
