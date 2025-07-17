import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Phone, Clock, Users, Award } from "lucide-react"

export default function AstrologyPage() {
  const services = [
    {
      title: "Kundli Reading & Analysis",
      description:
        "Complete birth chart analysis with detailed insights into your personality, strengths, and life path.",
      price: "₹2,999",
      duration: "60 minutes",
      features: ["Birth chart creation", "Planetary positions analysis", "Life predictions", "Career guidance"],
    },
    {
      title: "Health & Wellness Astrology",
      description:
        "Specialized consultation focusing on health patterns and wellness recommendations based on your chart.",
      price: "₹1,999",
      duration: "45 minutes",
      features: ["Health analysis", "Wellness recommendations", "Dietary suggestions", "Yoga practices"],
    },
    {
      title: "Relationship Compatibility",
      description: "Comprehensive compatibility analysis for couples and relationship guidance.",
      price: "₹3,499",
      duration: "75 minutes",
      features: ["Compatibility score", "Relationship dynamics", "Marriage timing", "Harmony tips"],
    },
    {
      title: "Career & Finance Guidance",
      description: "Professional guidance for career decisions and financial planning based on astrological insights.",
      price: "₹2,499",
      duration: "50 minutes",
      features: ["Career path analysis", "Business timing", "Financial predictions", "Success strategies"],
    },
  ]

  const testimonials = [
    {
      name: "Ravi Sharma",
      text: "The kundli reading was incredibly accurate and helped me understand my life purpose better.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      text: "The health astrology consultation provided valuable insights that complemented my wellness journey.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      text: "Career guidance was spot-on. Made important decisions with confidence after the consultation.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
              🔮 Ancient Wisdom for Modern Life
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Astrology Services</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Discover your life's purpose, understand your relationships, and make informed decisions with personalized
            astrological guidance from our expert astrologers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-800 px-8 py-3 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800 dark:text-purple-300">
              Why Choose Our Astrology Services?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our experienced astrologers combine traditional Vedic astrology with modern insights to provide accurate,
              practical guidance for your life's most important decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                  <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Astrologers</h3>
                <p className="text-gray-600 dark:text-gray-300">Certified professionals with 15+ years of experience</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1000+ Consultations</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Trusted by clients worldwide for accurate predictions
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
                <p className="text-gray-600 dark:text-gray-300">Online and offline consultations at your convenience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800 dark:text-purple-300">
              Our Astrology Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive range of astrological services designed to provide clarity and guidance for
              every aspect of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      {service.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Book This Service</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800 dark:text-purple-300">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover Your Destiny?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-purple-100">
            Book your personalized astrology consultation today and gain valuable insights into your life's journey,
            relationships, and future opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +91 98765 43210
            </Button>
          </div>

          <div className="text-purple-200">
            <p>Available 7 days a week | Online & Offline Consultations</p>
            <p>Email: astrology@serenityyoga.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
