import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, Calendar } from "lucide-react"

export default function TrainersPage() {
  const trainers = [
    {
      id: "priya-sharma",
      name: "Priya Sharma",
      specialization: ["Hatha Yoga", "Meditation", "Pranayama"],
      experience: "8 Years",
      rating: 4.9,
      students: 150,
      image: "/placeholder.svg?height=400&width=400",
      bio: "Certified yoga instructor with deep knowledge of traditional Indian practices and modern wellness techniques. Specializes in helping beginners find their path to inner peace.",
      certifications: ["RYT-500", "Meditation Teacher", "Pranayama Specialist"],
      languages: ["English", "Hindi", "Gujarati"],
      availability: "Mon-Fri: 6AM-8PM, Sat-Sun: 7AM-6PM",
    },
    {
      id: "arjun-patel",
      name: "Arjun Patel",
      specialization: ["Vinyasa Flow", "Strength Training", "Flexibility"],
      experience: "6 Years",
      rating: 4.8,
      students: 120,
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dynamic instructor specializing in power yoga and strength-building practices for modern lifestyles. Perfect for those seeking physical transformation.",
      certifications: ["RYT-200", "Power Yoga Specialist", "Fitness Trainer"],
      languages: ["English", "Hindi"],
      availability: "Mon-Sat: 5AM-9PM, Sun: 8AM-5PM",
    },
    {
      id: "maya-singh",
      name: "Maya Singh",
      specialization: ["Restorative Yoga", "Ayurveda", "Wellness Coaching"],
      experience: "10 Years",
      rating: 5.0,
      students: 200,
      image: "/placeholder.svg?height=400&width=400",
      bio: "Holistic wellness expert combining yoga therapy with Ayurvedic principles for complete healing. Ideal for those seeking therapeutic and restorative practices.",
      certifications: ["RYT-500", "Ayurveda Practitioner", "Yoga Therapist"],
      languages: ["English", "Hindi", "Sanskrit"],
      availability: "Tue-Sun: 7AM-7PM, Mon: Rest Day",
    },
    {
      id: "ravi-kumar",
      name: "Ravi Kumar",
      specialization: ["Ashtanga Yoga", "Advanced Poses", "Spiritual Guidance"],
      experience: "12 Years",
      rating: 4.9,
      students: 180,
      image: "/placeholder.svg?height=400&width=400",
      bio: "Traditional Ashtanga practitioner with extensive knowledge of advanced yoga techniques and spiritual philosophy. Perfect for dedicated practitioners.",
      certifications: ["RYT-500", "Ashtanga Authorized", "Philosophy Teacher"],
      languages: ["English", "Hindi", "Tamil"],
      availability: "Daily: 5AM-7AM, 6PM-8PM",
    },
    {
      id: "kavya-reddy",
      name: "Kavya Reddy",
      specialization: ["Prenatal Yoga", "Women's Health", "Gentle Flow"],
      experience: "7 Years",
      rating: 4.9,
      students: 95,
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specialized in prenatal and postnatal yoga with focus on women's health and wellness. Creates safe, nurturing environments for all life stages.",
      certifications: ["RYT-200", "Prenatal Yoga Specialist", "Women's Health Coach"],
      languages: ["English", "Hindi", "Telugu"],
      availability: "Mon-Fri: 9AM-6PM, Weekends: By appointment",
    },
    {
      id: "amit-gupta",
      name: "Amit Gupta",
      specialization: ["Corporate Wellness", "Stress Management", "Quick Sessions"],
      experience: "5 Years",
      rating: 4.7,
      students: 85,
      image: "/placeholder.svg?height=400&width=400",
      bio: "Corporate wellness specialist helping busy professionals integrate yoga and mindfulness into their daily routines. Expert in time-efficient practices.",
      certifications: ["RYT-200", "Corporate Wellness", "Stress Management"],
      languages: ["English", "Hindi"],
      availability: "Mon-Fri: 6AM-9AM, 6PM-9PM, Weekends: Flexible",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 yoga-gradient opacity-90" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Expert Trainers</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Learn from certified yoga instructors who bring years of experience, deep knowledge of traditional
            practices, and personalized guidance to help you achieve your wellness goals.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{trainer.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {trainer.experience} Experience
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{trainer.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.specialization.slice(0, 2).map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                    {trainer.specialization.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{trainer.specialization.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{trainer.students} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{trainer.certifications.length} certs</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link href={`/trainers/${trainer.id}`}>
                      <Button className="w-full yoga-gradient text-white hover:opacity-90">View Full Profile</Button>
                    </Link>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-green-100">
            Choose the perfect trainer for your goals and begin your transformation today. All our trainers offer
            personalized guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-planner">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                Get AI Wellness Plan First
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 bg-transparent"
            >
              Contact Us for Guidance
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
