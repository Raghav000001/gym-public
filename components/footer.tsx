import Link from "next/link"
import { NotebookIcon as Lotus, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Lotus className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">R-zone Yoga</span>
            </div>
            <p className="text-gray-300 text-sm">
              Experience authentic Indian yoga and holistic wellness with personalized guidance and ancient wisdom at
              R-zone.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/ai-planner" className="block text-gray-300 hover:text-white transition-colors">
                AI Wellness Plan
              </Link>
              <Link href="/astrology" className="block text-gray-300 hover:text-white transition-colors">
                Astrology Services
              </Link>
              <Link href="/trainers" className="block text-gray-300 hover:text-white transition-colors">
                Our Trainers
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Hatha Yoga</p>
              <p className="text-gray-300">Vinyasa Flow</p>
              <p className="text-gray-300">Meditation</p>
              <p className="text-gray-300">Pranayama</p>
              <p className="text-gray-300">Ayurvedic Consultation</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">info@rzoneyoga.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 R-zone Yoga and Fitness. All rights reserved. Built with love and mindfulness.
          </p>
        </div>
      </div>
    </footer>
  )
}
