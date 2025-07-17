"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Download, Printer, Brain, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface WellnessPlan {
  yogaRoutine: {
    morning: string[]
    evening: string[]
  }
  dietChart: {
    breakfast: string[]
    lunch: string[]
    dinner: string[]
    snacks: string[]
  }
  recommendations: string[]
}

export default function AIPlanner() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    fitnessGoals: "",
    lifestyle: "",
    medicalConditions: "",
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [wellnessPlan, setWellnessPlan] = useState<WellnessPlan | null>(null)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateWellnessPlan = async () => {
    if (!formData.name || !formData.age || !formData.gender) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const plan: WellnessPlan = {
        yogaRoutine: {
          morning: [
            "Surya Namaskara (Sun Salutation) - 5 rounds",
            "Vrikshasana (Tree Pose) - 1 minute each side",
            "Bhujangasana (Cobra Pose) - 30 seconds, 3 reps",
            "Balasana (Child's Pose) - 2 minutes",
            "Pranayama (Breathing Exercise) - 5 minutes",
          ],
          evening: [
            "Paschimottanasana (Seated Forward Bend) - 2 minutes",
            "Supta Baddha Konasana (Reclining Butterfly) - 3 minutes",
            "Viparita Karani (Legs Up Wall) - 5 minutes",
            "Shavasana (Corpse Pose) - 10 minutes",
            "Meditation - 10 minutes",
          ],
        },
        dietChart: {
          breakfast: [
            "Warm water with lemon and honey",
            "Oats porridge with almonds and berries",
            "Green tea or herbal tea",
          ],
          lunch: [
            "Brown rice with dal (lentils)",
            "Mixed vegetable curry",
            "Fresh salad with cucumber and tomatoes",
            "Buttermilk or lassi",
          ],
          dinner: [
            "Quinoa or millet roti",
            "Steamed vegetables",
            "Light soup (vegetable or lentil)",
            "Herbal tea before bed",
          ],
          snacks: [
            "Fresh fruits (apple, banana, or seasonal)",
            "Handful of nuts and seeds",
            "Coconut water",
            "Homemade energy balls",
          ],
        },
        recommendations: [
          "Practice yoga consistently at the same time daily",
          "Stay hydrated - drink 8-10 glasses of water",
          "Get 7-8 hours of quality sleep",
          "Avoid processed foods and excessive sugar",
          "Practice mindful eating and chew slowly",
          "Take short walks after meals",
          "Practice deep breathing when stressed",
        ],
      }

      setWellnessPlan(plan)
      setIsGenerating(false)
      toast({
        title: "Wellness Plan Generated!",
        description: "Your personalized plan is ready.",
      })
    }, 3000)
  }

  const downloadPlan = () => {
    toast({
      title: "Download Started",
      description: "Your wellness plan PDF is being prepared.",
    })
  }

  const printPlan = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full mb-4">
            <Brain className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-green-800 dark:text-green-200 font-medium">AI-Powered Wellness</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 yoga-text-gradient">
            Personalized Wellness Plan Generator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get a customized yoga routine and diet plan tailored specifically to your goals, lifestyle, and health needs
            using advanced AI technology.
          </p>
        </div>

        {!wellnessPlan ? (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-green-600" />
                <span>Tell Us About Yourself</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    placeholder="Enter your age"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Gender *</Label>
                  <Select onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                    placeholder="Enter weight"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={formData.height}
                    onChange={(e) => handleInputChange("height", e.target.value)}
                    placeholder="Enter height"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Fitness Goals</Label>
                  <Select onValueChange={(value) => handleInputChange("fitnessGoals", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="strength">Strength Building</SelectItem>
                      <SelectItem value="flexibility">Flexibility</SelectItem>
                      <SelectItem value="general-wellness">General Wellness</SelectItem>
                      <SelectItem value="stress-relief">Stress Relief</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Lifestyle</Label>
                  <Select onValueChange={(value) => handleInputChange("lifestyle", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your lifestyle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (Desk job, minimal activity)</SelectItem>
                      <SelectItem value="moderate">Moderate (Some exercise, active lifestyle)</SelectItem>
                      <SelectItem value="active">Active (Regular exercise, physical job)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="medical">Medical Conditions or Concerns</Label>
                <Textarea
                  id="medical"
                  value={formData.medicalConditions}
                  onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                  placeholder="Please mention any medical conditions, injuries, or health concerns..."
                  rows={3}
                />
              </div>

              <Button
                onClick={generateWellnessPlan}
                disabled={isGenerating}
                className="w-full yoga-gradient text-white hover:opacity-90 py-6 text-lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating Your Personalized Plan...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-5 w-5" />
                    Generate My Wellness Plan
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={downloadPlan} className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
              <Button onClick={printPlan} variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Printer className="h-4 w-4" />
                <span>Print Plan</span>
              </Button>
            </div>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl yoga-text-gradient">
                  Personalized Wellness Plan for {formData.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Morning Yoga Routine */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <span>🌅</span>
                    <span>Morning Yoga Routine</span>
                  </h3>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {wellnessPlan.yogaRoutine.morning.map((pose, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-orange-500 font-bold">{index + 1}.</span>
                          <span>{pose}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Evening Yoga Routine */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <span>🌙</span>
                    <span>Evening Yoga Routine</span>
                  </h3>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {wellnessPlan.yogaRoutine.evening.map((pose, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-purple-500 font-bold">{index + 1}.</span>
                          <span>{pose}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Diet Chart */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <span>🥗</span>
                    <span>Personalized Diet Chart</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Breakfast</h4>
                      <ul className="space-y-1">
                        {wellnessPlan.dietChart.breakfast.map((item, index) => (
                          <li key={index} className="text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Lunch</h4>
                      <ul className="space-y-1">
                        {wellnessPlan.dietChart.lunch.map((item, index) => (
                          <li key={index} className="text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Dinner</h4>
                      <ul className="space-y-1">
                        {wellnessPlan.dietChart.dinner.map((item, index) => (
                          <li key={index} className="text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-pink-700 dark:text-pink-300">Healthy Snacks</h4>
                      <ul className="space-y-1">
                        {wellnessPlan.dietChart.snacks.map((item, index) => (
                          <li key={index} className="text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <span>💡</span>
                    <span>Wellness Recommendations</span>
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {wellnessPlan.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-500 font-bold">✓</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                onClick={() => {
                  setWellnessPlan(null)
                  setFormData({
                    name: "",
                    age: "",
                    gender: "",
                    weight: "",
                    height: "",
                    fitnessGoals: "",
                    lifestyle: "",
                    medicalConditions: "",
                  })
                }}
                variant="outline"
                className="px-8 py-2"
              >
                Generate New Plan
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
