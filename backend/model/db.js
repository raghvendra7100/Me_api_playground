const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  bio: String,
  location: String,
  links: {
    github: String,
    linkedin: String,
  },
  educations: [
    {
      degree: String,
      institute: String,
      startYear: Number,
      endYear: Number,
      gpa: Number,
    }
  ],
  skills: [
    {
      name: String,
      level: Number,    
      isTop: { type: Boolean, default: false }
    }
  ],
  projects: [
    {
      title: String,
      description: String,
      skills: [String]   
    }
  ]
});

module.exports = mongoose.model("Profile", ProfileSchema);
