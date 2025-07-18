import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, Calendar, Clock, Globe, CheckCircle, MessageCircle, Phone } from "lucide-react"

// This would typically come from a database
const trainersData = {
  "priya-sharma": {
    id: "priya-sharma",
    name: "Priya Sharma",
    specialization: ["Hatha Yoga", "Meditation", "Pranayama"],
    experience: "8 Years",
    rating: 4.9,
    students: 150,
    image: "/placeholder.svg?height=500&width=500",
    bio: "Certified yoga instructor with deep knowledge of traditional Indian practices and modern wellness techniques. Priya has been teaching yoga for over 8 years and has helped hundreds of students find their path to inner peace and physical wellness. Her gentle yet effective approach makes yoga accessible to practitioners of all levels.",
    detailedBio:
      "Priya began her yoga journey in Rishikesh, the yoga capital of the world, where she completed her initial teacher training. She has since traveled extensively throughout India, studying with renowned masters and deepening her understanding of ancient yogic traditions. Her teaching philosophy centers on the belief that yoga is not just physical exercise, but a complete lifestyle that encompasses mind, body, and spirit.",
    certifications: [
      "RYT-500 (Registered Yoga Teacher)",
      "Meditation Teacher Certification",
      "Pranayama Specialist",
      "Yoga Alliance Certified",
    ],
    languages: ["English", "Hindi", "Gujarati"],
    availability: "Mon-Fri: 6AM-8PM, Sat-Sun: 7AM-6PM",
    specialties: [
      "Beginner-friendly Hatha Yoga",
      "Guided Meditation Sessions",
      "Breathing Techniques (Pranayama)",
      "Stress Relief and Relaxation",
      "Traditional Indian Yoga Philosophy",
      "Mindfulness Practices",
    ],
    achievements: [
      "Trained over 150 students in 8 years",
      "Conducted workshops in 5+ cities",
      "Featured in Yoga Journal Magazine",
      "Completed 1000+ hours of advanced training",
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        text: "Priya's classes are transformative. Her gentle guidance helped me overcome anxiety and find inner peace.",
        rating: 5,
      },
      {
        name: "Rajesh Patel",
        text: "Best yoga teacher I've ever had. Her knowledge of traditional practices is incredible.",
        rating: 5,
      },
      {
        name: "Maria Garcia",
        text: "Priya makes yoga accessible for everyone. I started as a complete beginner and now feel confident in my practice.",
        rating: 5,
      },
    ],
    classTypes: [
      {
        name: "Beginner Hatha Yoga",
        duration: "60 minutes",
        price: "₹800",
        description: "Perfect for those new to yoga. Focus on basic poses, breathing, and relaxation.",
      },
      {
        name: "Meditation & Mindfulness",
        duration: "45 minutes",
        price: "₹600",
        description: "Guided meditation sessions to reduce stress and increase mental clarity.",
      },
      {
        name: "Pranayama Workshop",
        duration: "90 minutes",
        price: "₹1200",
        description: "Deep dive into breathing techniques for energy and healing.",
      },
      {
        name: "Private Session",
        duration: "60 minutes",
        price: "₹2000",
        description: "One-on-one personalized yoga instruction tailored to your needs.",
      },
    ],
  },
  // Add other trainers here...
};

export default function TrainerProfile({ params }: { params: { slug: string } }) {
  const trainer = trainersData[params.slug as keyof typeof trainersData]

  if (!trainer) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary">Expert Trainer</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-medium">{trainer.rating}</span>
                  <span className="text-gray-500">({trainer.students} students)</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 yoga-text-gradient">
                {trainer.name}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {trainer.specialization.map((spec) => (
                  <Badge key={spec} variant="outline" className="border-green-500 text-green-700">
                    {spec}
                  </Badge>
                ))}
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {trainer.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{trainer.experience} Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{trainer.students} Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-sm">{trainer.languages.join(', ')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Flexible Schedule</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="yoga-gradient text-white hover:opacity-90">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Session
                </Button>
                <Button size="lg" variant="outline">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{trainer.rating}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About {trainer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {trainer.detailedBio}
                  </p>
                  
                  <h4 className="font-semibold mb-3">Specialties</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {trainer.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="font-semibold mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {trainer.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Class Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trainer.classTypes.map((classType, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold">{classType.name}</h5>
                          <Badge variant="secondary">{classType.price}</Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {classType.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* End Main Content */}
          </div>
        </div>
      </section>
    </div>
  );
}
