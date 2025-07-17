"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Brain, Calendar, Settings, LogOut, Eye, BookOpen, UserCheck, Edit } from "lucide-react"
import Link from "next/link"

export default function TrainerDashboard() {
  const stats = [
    {
      title: "My Members",
      value: "45",
      change: "+3 this week",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "AI Plans Viewed",
      value: "28",
      change: "+5 today",
      icon: Brain,
      color: "text-purple-600",
    },
    {
      title: "Classes This Week",
      value: "12",
      change: "3 upcoming",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Active Members",
      value: "42",
      change: "3 new this month",
      icon: UserCheck,
      color: "text-orange-600",
    },
  ]

  const myMembers = [
    {
      id: 1,
      name: "Anita Sharma",
      email: "anita@email.com",
      plan: "Premium",
      lastClass: "2024-01-15",
      status: "Active",
      subscription: "Monthly",
    },
    {
      id: 2,
      name: "Rajesh Patel",
      email: "rajesh@email.com",
      plan: "Basic",
      lastClass: "2024-01-14",
      status: "Active",
      subscription: "Quarterly",
    },
    {
      id: 3,
      name: "Meera Singh",
      email: "meera@email.com",
      plan: "Elite",
      lastClass: "2024-01-13",
      status: "Active",
      subscription: "Yearly",
    },
    {
      id: 4,
      name: "Vikram Kumar",
      email: "vikram@email.com",
      plan: "Premium",
      lastClass: "2024-01-12",
      status: "Inactive",
      subscription: "Monthly",
    },
  ]

  const recentPlans = [
    { id: 1, studentName: "Anita Sharma", planType: "Weight Loss", generatedDate: "2024-01-15", status: "Active" },
    { id: 2, studentName: "Rajesh Patel", planType: "Flexibility", generatedDate: "2024-01-14", status: "Active" },
    { id: 3, studentName: "Meera Singh", planType: "Strength", generatedDate: "2024-01-13", status: "Completed" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Trainer Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300">Manage your students and track their progress.</p>
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
                    <p className="text-sm text-gray-500">{stat.change}</p>
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
          {/* My Students */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>My Members</span>
                <Link href="/trainer/members">
                  <Button variant="outline" size="sm">
                    View All Members
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myMembers.map((member) => (
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
                        <Badge variant="outline">{member.subscription}</Badge>
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

          {/* Recent AI Plans */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent AI Plans</span>
                <Button variant="outline" size="sm">
                  View All Plans
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{plan.studentName}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{plan.planType} Plan</p>
                      <p className="text-sm text-gray-500">Generated: {plan.generatedDate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={plan.status === "Active" ? "default" : "secondary"}>{plan.status}</Badge>
                      <Button variant="ghost" size="icon">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/trainer/members/add">
                <Button className="h-20 flex flex-col items-center justify-center space-y-2 w-full">
                  <Users className="h-6 w-6" />
                  <span>Add New Member</span>
                </Button>
              </Link>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Calendar className="h-6 w-6" />
                <span>Schedule Class</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <BookOpen className="h-6 w-6" />
                <span>Create Resource</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Note about limited access */}
        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Note:</strong> As a trainer, you have access to manage your assigned students and view their
            AI-generated plans. Revenue information and other trainers' data are not accessible from this dashboard.
          </p>
        </div>
      </div>
    </div>
  )
}
