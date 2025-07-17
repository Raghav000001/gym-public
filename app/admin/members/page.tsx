"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Search, Filter, Eye, Edit, Trash2, Plus, ArrowLeft, UserCheck } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminMembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPlan, setFilterPlan] = useState("all")
  const [filterTrainer, setFilterTrainer] = useState("all")
  const { toast } = useToast()

  const members = [
    {
      id: 1,
      name: "Anita Sharma",
      email: "anita@email.com",
      phone: "+91 98765 43210",
      plan: "Premium",
      subscription: "Monthly",
      trainer: "Priya Sharma",
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
      trainer: "Arjun Patel",
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
      trainer: "Maya Singh",
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
      trainer: "Priya Sharma",
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
      trainer: "Arjun Patel",
      joinDate: "2024-01-11",
      lastClass: "2024-01-20",
      status: "Active",
      photo: "/placeholder.svg?height=50&width=50",
    },
  ]

  const trainers = ["Priya Sharma", "Arjun Patel", "Maya Singh", "Ravi Kumar"]

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || member.status.toLowerCase() === filterStatus
    const matchesPlan = filterPlan === "all" || member.plan.toLowerCase() === filterPlan.toLowerCase()
    const matchesTrainer = filterTrainer === "all" || member.trainer === filterTrainer

    return matchesSearch && matchesStatus && matchesPlan && matchesTrainer
  })

  const handleDeleteMember = (memberId: number, memberName: string) => {
    if (confirm(`Are you sure you want to delete ${memberName}? This action cannot be undone.`)) {
      toast({
        title: "Member Deleted",
        description: `${memberName} has been removed from the system.`,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">All Members Management</h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Manage all members across all trainers (Super Admin Access)
                </p>
              </div>
            </div>
            <Link href="/admin/members/add">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Member
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Members</p>
                  <p className="text-2xl font-bold">{members.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Active Members</p>
                  <p className="text-2xl font-bold">{members.filter((m) => m.status === "Active").length}</p>
                </div>
                <UserCheck className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Premium Members</p>
                  <p className="text-2xl font-bold">{members.filter((m) => m.plan === "Premium").length}</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800">Premium</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Elite Members</p>
                  <p className="text-2xl font-bold">{members.filter((m) => m.plan === "Elite").length}</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Elite</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
              <Select value={filterTrainer} onValueChange={setFilterTrainer}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by trainer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Trainers</SelectItem>
                  {trainers.map((trainer) => (
                    <SelectItem key={trainer} value={trainer}>
                      {trainer}
                    </SelectItem>
                  ))}
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
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="outline">{member.subscription}</Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          {member.trainer}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-500">Joined: {member.joinDate}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Link href={`/admin/members/${member.id}`}>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/admin/members/${member.id}/edit`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteMember(member.id, member.name)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Admin privileges note */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Super Admin Privileges:</strong> You have full access to view, edit, and delete all members across
            all trainers. You can also reassign members to different trainers and manage all subscription details.
          </p>
        </div>
      </div>
    </div>
  )
}
