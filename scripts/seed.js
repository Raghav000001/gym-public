const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

// Load environment variables
require("dotenv").config({ path: ".env.local" })

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/rzone-yoga"

// Admin Schema (simplified for seeding)
const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["super_admin", "trainer"], required: true },
    phone: String,
    specialization: [String],
    experience: String,
    rating: { type: Number, default: 0 },
    students: { type: Number, default: 0 },
    bio: String,
    certifications: [String],
    languages: [String],
    availability: String,
    photo: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
)

// Ensure we're using a fresh model
delete mongoose.models.Admin
const Admin = mongoose.model("Admin", AdminSchema)

async function seedDatabase() {
  try {
    console.log("Connecting to MongoDB...")
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("✅ Connected to MongoDB")

    // Clear existing admins
    console.log("Clearing existing admin data...")
    await Admin.deleteMany({})
    console.log("✅ Cleared existing data")

    // Hash passwords
    console.log("Hashing passwords...")
    const hashedAdminPassword = await bcrypt.hash("admin123", 10)
    const hashedTrainerPassword = await bcrypt.hash("trainer123", 10)
    console.log("✅ Passwords hashed")

    // Create Super Admin
    console.log("Creating Super Admin...")
    const superAdmin = new Admin({
      name: "Super Admin",
      email: "admin@rzoneyoga.com",
      password: hashedAdminPassword,
      role: "super_admin",
      phone: "+91 98765 43210",
      isActive: true,
    })

    await superAdmin.save()
    console.log("✅ Super Admin created:", superAdmin.email)

    // Create Trainers
    console.log("Creating trainers...")
    const trainers = [
      {
        name: "Priya Sharma",
        email: "priya@rzoneyoga.com",
        password: hashedTrainerPassword,
        role: "trainer",
        phone: "+91 98765 43211",
        specialization: ["Hatha Yoga", "Meditation", "Pranayama"],
        experience: "8 Years",
        rating: 4.9,
        students: 150,
        bio: "Certified yoga instructor with deep knowledge of traditional Indian practices and modern wellness techniques.",
        certifications: ["RYT-500", "Meditation Teacher", "Pranayama Specialist"],
        languages: ["English", "Hindi", "Gujarati"],
        availability: "Mon-Fri: 6AM-8PM, Sat-Sun: 7AM-6PM",
        isActive: true,
      },
      {
        name: "Arjun Patel",
        email: "arjun@rzoneyoga.com",
        password: hashedTrainerPassword,
        role: "trainer",
        phone: "+91 98765 43212",
        specialization: ["Vinyasa Flow", "Strength Training", "Flexibility"],
        experience: "6 Years",
        rating: 4.8,
        students: 120,
        bio: "Dynamic instructor specializing in power yoga and strength-building practices for modern lifestyles.",
        certifications: ["RYT-200", "Power Yoga Specialist", "Fitness Trainer"],
        languages: ["English", "Hindi"],
        availability: "Mon-Sat: 5AM-9PM, Sun: 8AM-5PM",
        isActive: true,
      },
      {
        name: "Maya Singh",
        email: "maya@rzoneyoga.com",
        password: hashedTrainerPassword,
        role: "trainer",
        phone: "+91 98765 43213",
        specialization: ["Restorative Yoga", "Ayurveda", "Wellness Coaching"],
        experience: "10 Years",
        rating: 5.0,
        students: 200,
        bio: "Holistic wellness expert combining yoga therapy with Ayurvedic principles for complete healing.",
        certifications: ["RYT-500", "Ayurveda Practitioner", "Yoga Therapist"],
        languages: ["English", "Hindi", "Sanskrit"],
        availability: "Tue-Sun: 7AM-7PM, Mon: Rest Day",
        isActive: true,
      },
    ]

    for (const trainerData of trainers) {
      const trainer = new Admin(trainerData)
      await trainer.save()
      console.log("✅ Trainer created:", trainer.email)
    }

    console.log("\n🎉 Database seeded successfully!")
    console.log("\n📋 Login Credentials:")
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    console.log("🔑 Super Admin:")
    console.log("   Email: admin@rzoneyoga.com")
    console.log("   Password: admin123")
    console.log("   URL: http://localhost:3000/admin/login")
    console.log("")
    console.log("👨‍🏫 Trainers:")
    console.log("   Email: priya@rzoneyoga.com")
    console.log("   Email: arjun@rzoneyoga.com")
    console.log("   Email: maya@rzoneyoga.com")
    console.log("   Password: trainer123 (for all trainers)")
    console.log("   URL: http://localhost:3000/trainer/login")
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
  } catch (error) {
    console.error("❌ Seeding error:", error)
    if (error.code === 11000) {
      console.error("Duplicate key error - data might already exist")
    }
    process.exit(1)
  } finally {
    await mongoose.disconnect()
    console.log("🔌 Disconnected from MongoDB")
    process.exit(0)
  }
}

// Handle process termination
process.on("SIGINT", async () => {
  console.log("\n⚠️  Process interrupted")
  await mongoose.disconnect()
  process.exit(0)
})

process.on("SIGTERM", async () => {
  console.log("\n⚠️  Process terminated")
  await mongoose.disconnect()
  process.exit(0)
})

seedDatabase()
