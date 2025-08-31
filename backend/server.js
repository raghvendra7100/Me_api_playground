const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();  

const app = express();
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI; 
const Profile = require("./model/db");
const profileRoutes = require("./routes/profile");
const skillsRoutes = require("./routes/skills");
const projectsRoutes = require("./routes/projects");
const searchRoutes = require("./routes/search");


// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" Connected to Mongo database"))
.catch(err => console.error("Could not connect to Mongo db", err));

// Health route 
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

 

 //profile endpoint
app.get("/profile", async (req, res) => {
  try {
    const profile = await Profile.findOne(); 
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

app.use("/profile", profileRoutes);
app.use("/skills", skillsRoutes);
app.use("/projects", projectsRoutes);
app.use("/search", searchRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("backend working");
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
