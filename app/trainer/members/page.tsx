"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Search, Filter, Eye, Edit, Plus, ArrowLeft } from "lucide-react"

export default function TrainerMembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPlan, setFilterPlan] = useState("all")

  const members = [
    {
      id: 1,
      name: "Anita Sharma",
      email: "anita@email.com",
      phone: "+91 98765 43210",
      plan: "Premium",
      subscription: "Monthly",
      joinDate: "2024-01-15",
      lastClass: "2024-01-20",
      status: "Active",
      photo: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Rajesh Patel",
      email: "rajesh@email.com",
      phone: "+91 98765 43211",
      plan: "Basic",
      subscription: "Quarterly",
      joinDate: "2024-01-14",
      lastClass: "2024-01-19",
      status: "Active",
      photo: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Meera Singh",
      email: "meera@email.com",
      phone: "+91 98765 43212",
      plan: "Elite",
      subscription: "Yearly",
      joinDate: "2024-01-13",
      lastClass: "2024-01-18",
      status: "Active",
      photo: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 4,
      name: "Vikram Kumar",
      email: "vikram@email.com",
      phone: "+91 98765 43213",
      plan: "Premium",
      subscription: "Monthly",
      joinDate: "2024-01-12",
      lastClass: "2024-01-15",
      status: "Inactive",
      photo: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 5,
      name: "Kavya Reddy",
      email: "kavya@email.com",
      phone: "+91 98765 43214",
      plan: "Basic",
      subscription: "Monthly",
      joinDate: "2024-01-11",
      lastClass: "2024-01-20",
      status: "Active",
      photo: "/placeholder.svg?height=50&width=50",
    },
  ]

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || member.status.toLowerCase() === filterStatus
    const matchesPlan = filterPlan === "all" || member.plan.toLowerCase() === filterPlan.toLowerCase()

    return matchesSearch && matchesStatus && matchesPlan
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/trainer/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Member Management</h1>
                <p className="text-gray-600 dark:text-gray-300">Manage your assigned members and their subscriptions</p>
              </div>
            </div>
            <Link href="/trainer/members/add">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Member
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterPlan} onValueChange={setFilterPlan}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Plans</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="elite">Elite</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <Users className="h-4 w-4 mr-2" />
                {filteredMembers.length} members found
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Members List */}
        <Card>
          <CardHeader>
            <CardTitle>All Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-lg">{member.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{member.email}</p>
                      <p className="text-sm text-gray-500">{member.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="secondary">{member.plan}</Badge>
                        <Badge variant={member.status === "Active" ? "default" : "destructive"}>{member.status}</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{member.subscription}</Badge>
                        <span className="text-sm text-gray-500">Joined: {member.joinDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Link href={`/trainer/members/${member.id}`}>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/trainer/members/${member.id}/edit`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Note about permissions */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> As a trainer, you can add new members and edit their subscription details. Only the
            Super Admin can delete members from the system.
          </p>
        </div>
      </div>
    </div>
  )
}
