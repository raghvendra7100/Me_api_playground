 const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Profile = require("./model/db");

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    
    await Profile.deleteMany({});

 
    await Profile.create({
      name: "Raghvendra Sharma",
      email: "sharmaraghvendra63@gmail.com",
      bio: "B.Tech CSE @ Manipal University Jaipur (2022-2026). Backend + full-stack dev.",
      location: "Jaipur, Rajasthan",
      links: {
        github: "https://github.com/raghvendra7100",
        linkedin: "https://www.linkedin.com/in/raghvendra-sharma-1b6349271",
      },
      educations: [
        { degree: "B.Tech in Computer Science and Engineering", institute: "Manipal University Jaipur", startYear: 2022, endYear: 2026, gpa: 7.38},
        { degree: "Class 12", institute: "Cambridge Court High School", endYear: 2020 },
        { degree: "Class 10", institute: "Cambridge Court High School", endYear: 2018 }
      ],
      skills: [
        { name: "JavaScript",  isTop: true },
        { name: "Node.js", isTop: true },
        { name: "React", isTop: true },
        { name: "Express.js",  isTop: true },
        { name: "MongoDB",  isTop: true },
        { name: "Python", isTop: false },
        { name: "C++",  isTop: false },
        { name: "AWS",  isTop: false },
        { name: "Docker",  isTop: false }
      ],
      projects: [
        {
          title: "Legal Document Summarization",
          description: "Full-stack platform for PDF/TXT upload and summarization using extractive (NLTK) and abstractive (fine-tuned BART). Microservices with FastAPI (NLP) and Express (auth/files).",
          skills: ["Python", "FastAPI", "Express.js", "Docker"]
        },
        {
          title: "ShopEase",
          description: "Responsive e-commerce site using FakeStore API with Redux for state management and Bootstrap styling. Features filters, sorting, and cart management.",
          skills: ["React", "Redux", "Bootstrap", "JavaScript"]
        }
      ]
    });

    console.log("Seeding complete");
    process.exit();
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
}

seed();
