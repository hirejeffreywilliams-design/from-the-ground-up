import { db, programsTable, testimonialsTable } from "@workspace/db";

async function seed() {
  console.log("Seeding database...");

  await db.delete(programsTable);
  await db.delete(testimonialsTable);

  await db.insert(programsTable).values([
    {
      title: "Construction Fundamentals",
      slug: "construction",
      description: "Learn the foundations of residential and commercial construction from framing to finishing.",
      longDescription: "Our Construction Fundamentals program takes you through every stage of the building process. From reading blueprints and laying foundations to framing walls and installing roofing, you'll gain hands-on experience with real tools on real projects. AI-powered simulations help you practice complex techniques before stepping onto the job site.",
      icon: "hard-hat",
      duration: "12 weeks",
      skillLevel: "Beginner to Intermediate",
      aiFeatures: "AI-powered 3D modeling simulations, virtual blueprint reading exercises, and smart progress tracking that adapts to your learning pace.",
      outcomes: ["Read and interpret construction blueprints", "Frame residential structures", "Understand building codes and safety regulations", "Operate common construction equipment", "Estimate materials and project costs"],
    },
    {
      title: "Electrical Systems",
      slug: "electrical",
      description: "Master residential and commercial electrical systems from wiring to troubleshooting.",
      longDescription: "Dive into the world of electrical work with our comprehensive program. You'll learn everything from basic circuit theory to advanced panel installations. Our AI-assisted diagnostic tools help you identify and solve electrical problems faster, preparing you for real-world troubleshooting scenarios.",
      icon: "zap",
      duration: "16 weeks",
      skillLevel: "Beginner to Advanced",
      aiFeatures: "AI circuit simulation software, interactive troubleshooting scenarios, and augmented reality wiring guides.",
      outcomes: ["Install and maintain residential wiring", "Read electrical schematics", "Troubleshoot circuit problems", "Understand NEC code requirements", "Work safely with electrical systems"],
    },
    {
      title: "Plumbing Essentials",
      slug: "plumbing",
      description: "From pipe fitting to system design — build expertise in modern plumbing systems.",
      longDescription: "Our Plumbing Essentials program covers everything from basic pipe fitting to designing complete plumbing systems. You'll work with copper, PVC, and PEX piping, learn to install fixtures, and understand drainage systems. AI tools help you visualize water flow and diagnose issues before they become costly problems.",
      icon: "droplets",
      duration: "14 weeks",
      skillLevel: "Beginner to Intermediate",
      aiFeatures: "AI-powered water flow modeling, virtual pipe layout planning, and smart diagnostic tools for leak detection.",
      outcomes: ["Install and repair plumbing fixtures", "Design basic plumbing layouts", "Work with multiple pipe materials", "Understand water supply and drainage systems", "Pass plumbing certification exams"],
    },
    {
      title: "Carpentry & Woodworking",
      slug: "carpentry",
      description: "Craft beautiful, functional structures with traditional techniques enhanced by modern technology.",
      longDescription: "Discover the art and science of carpentry in this hands-on program. From rough framing to fine finish work, you'll develop skills that have been valued for centuries — now enhanced with AI-powered design tools. Learn to build cabinets, install trim, and create custom furniture pieces.",
      icon: "hammer",
      duration: "10 weeks",
      skillLevel: "All Levels",
      aiFeatures: "AI-assisted design software for custom projects, CNC programming basics, and automated measurement verification.",
      outcomes: ["Build custom cabinets and shelving", "Install doors, windows, and trim", "Use power and hand tools safely", "Read and create woodworking plans", "Finish and seal wood surfaces"],
    },
    {
      title: "HVAC Systems",
      slug: "hvac",
      description: "Install, maintain, and repair heating, ventilation, and air conditioning systems.",
      longDescription: "Climate control is essential in every building. Our HVAC program teaches you to install, maintain, and troubleshoot heating and cooling systems. With AI-enhanced energy modeling, you'll learn to design efficient systems that save energy and money while keeping people comfortable.",
      icon: "thermometer",
      duration: "14 weeks",
      skillLevel: "Intermediate",
      aiFeatures: "AI energy efficiency modeling, predictive maintenance algorithms, and smart diagnostic scanning tools.",
      outcomes: ["Install residential HVAC systems", "Perform preventive maintenance", "Troubleshoot heating and cooling issues", "Understand refrigeration cycles", "Calculate heating and cooling loads"],
    },
    {
      title: "AI in the Trades",
      slug: "ai-trades",
      description: "Harness artificial intelligence to work smarter, safer, and more efficiently in any trade.",
      longDescription: "This cutting-edge program bridges traditional trade skills with modern AI technology. Learn how to use AI-powered tools for project estimation, safety monitoring, quality control, and client management. Whether you're a seasoned tradesperson or just starting out, AI skills will set you apart in the modern workforce.",
      icon: "brain",
      duration: "8 weeks",
      skillLevel: "All Levels",
      aiFeatures: "Hands-on training with industry-leading AI tools, drone operation for site surveys, and AI-powered project management platforms.",
      outcomes: ["Use AI tools for project estimation", "Implement AI safety monitoring on job sites", "Leverage drone technology for surveys", "Apply machine learning to quality control", "Build an AI-enhanced business plan"],
    },
  ]);

  await db.insert(testimonialsTable).values([
    {
      name: "Maria Santos",
      program: "Construction Fundamentals",
      quote: "From The Ground Up didn't just teach me construction — it gave me the confidence to build a career. The AI simulations helped me practice before touching real materials, and now I'm leading my own crew.",
    },
    {
      name: "James Thompson",
      program: "Electrical Systems",
      quote: "I switched careers at 42, and this program made it possible. The instructors met me where I was, and the AI troubleshooting tools gave me skills that set me apart from day one on the job.",
    },
    {
      name: "Aisha Washington",
      program: "Plumbing Essentials",
      quote: "As a young woman entering the trades, I wasn't sure what to expect. From The Ground Up created a welcoming space where I could learn and grow. Now I run my own plumbing business.",
    },
    {
      name: "David Chen",
      program: "AI in the Trades",
      quote: "I've been a carpenter for 20 years, but this program showed me how AI can make my work faster and more precise. The drone surveying skills alone were worth the entire course.",
    },
    {
      name: "Taylor Rivera",
      program: "Carpentry & Woodworking",
      quote: "The hands-on approach here is incredible. From day one, you're building real things. The AI design tools helped me visualize projects before cutting a single board.",
    },
  ]);

  console.log("Seed complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});

// TODO: expand coverage
