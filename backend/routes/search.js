const express = require("express");
const Profile = require("../model/db");
const router = express.Router();

// GET /search?q=term → search skills + projects
router.get("/", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.json({ skills: [], projects: [] });

    const profile = await Profile.findOne();

    const skills = profile.skills.filter(s =>
      s.name.toLowerCase().includes(q.toLowerCase())
    );

    const projects = profile.projects.filter(p =>
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(q.toLowerCase()))
    );

    res.json({ skills, projects });
  } catch (err) {
    res.status(500).json({ error: "Failed to search" });
  }
});

module.exports = router;
