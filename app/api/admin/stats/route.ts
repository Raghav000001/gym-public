import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"
import Admin from "@/models/Admin"
import WellnessPlan from "@/models/WellnessPlan"
import Revenue from "@/models/Revenue"
import { authenticateRequest } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const user = await authenticateRequest(request)
    if (!user || user.role !== "super_admin") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    await dbConnect()

    // Get all stats
    const [
      totalMembers,
      activeMembers,
      totalTrainers,
      activeTrainers,
      totalPlans,
      totalRevenue,
      monthlyRevenue,
      quarterlyRevenue,
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ status: "active" }),
      Admin.countDocuments({ role: "trainer" }),
      Admin.countDocuments({ role: "trainer", isActive: true }),
      WellnessPlan.countDocuments(),
      Revenue.aggregate([{ $match: { status: "completed" } }, { $group: { _id: null, total: { $sum: "$amount" } } }]),
      Revenue.aggregate([
        {
          $match: {
            status: "completed",
            paymentDate: {
              $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            },
          },
        },
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ]),
      Revenue.aggregate([
        {
          $match: {
            status: "completed",
            paymentDate: {
              $gte: new Date(new Date().getFullYear(), Math.floor(new Date().getMonth() / 3) * 3, 1),
            },
          },
        },
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ]),
    ])

    return NextResponse.json({
      totalMembers,
      activeMembers,
      totalTrainers,
      activeTrainers,
      totalPlans,
      totalRevenue: totalRevenue[0]?.total || 0,
      monthlyRevenue: monthlyRevenue[0]?.total || 0,
      quarterlyRevenue: quarterlyRevenue[0]?.total || 0,
    })
  } catch (error) {
    console.error("Get admin stats error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
