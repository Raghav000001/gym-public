"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Brain, DollarSign, UserCheck, TrendingUp, Settings, LogOut, Eye, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Members",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "AI Plans Generated",
      value: "856",
      change: "+8%",
      icon: Brain,
      color: "text-purple-600",
    },
    {
      title: "Total Revenue",
      value: "₹2,45,000",
      change: "+15%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Trainers",
      value: "12",
      change: "+2",
      icon: UserCheck,
      color: "text-orange-600",
    },
  ]

  const recentMembers = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@email.com",
      plan: "Premium",
      joinDate: "2024-01-15",
      status: "Active",
    },
    { id: 2, name: "Rajesh Kumar", email: "rajesh@email.com", plan: "Basic", joinDate: "2024-01-14", status: "Active" },
    { id: 3, name: "Anita Desai", email: "anita@email.com", plan: "Elite", joinDate: "2024-01-13", status: "Active" },
    {
      id: 4,
      name: "Vikram Singh",
      email: "vikram@email.com",
      plan: "Premium",
      joinDate: "2024-01-12",
      status: "Inactive",
    },
  ]

  const trainers = [
    {
      id: 1,
      name: "Maya Singh",
      email: "maya@serenityyoga.com",
      specialization: "Hatha Yoga",
      students: 45,
      status: "Active",
    },
    {
      id: 2,
      name: "Arjun Patel",
      email: "arjun@serenityyoga.com",
      specialization: "Vinyasa Flow",
      students: 38,
      status: "Active",
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya@serenityyoga.com",
      specialization: "Meditation",
      students: 52,
      status: "Active",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Welcome back! Here's what's happening at Serenity Yoga.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Members */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent Members</span>
                <Link href="/admin/members">
                  <Button variant="outline" size="sm">
                    View All Members
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{member.email}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary">{member.plan}</Badge>
                        <Badge variant={member.status === "Active" ? "default" : "destructive"}>{member.status}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trainers Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Trainers</span>
                <Button variant="outline" size="sm">
                  Add Trainer
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainers.map((trainer) => (
                  <div
                    key={trainer.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{trainer.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{trainer.specialization}</p>
                      <p className="text-sm text-gray-500">{trainer.students} students</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">Active</Badge>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Section - Only visible to Super Admin */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-green-600" />
              Revenue Analytics (Super Admin Only)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-2xl font-bold text-green-600">₹2,45,000</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">This Month</p>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">₹8,90,000</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">This Quarter</p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">₹28,50,000</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">This Year</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
