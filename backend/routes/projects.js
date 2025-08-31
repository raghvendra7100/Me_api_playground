const express = require("express");
const Profile = require("../model/db");
const router = express.Router();

// GET /projects → list projects, filter by skill if ?skill= given
router.get("/", async (req, res) => {
  try {
    const { skill } = req.query;
    const profile = await Profile.findOne();

    let projects = profile.projects;

    if (skill) {
      projects = projects.filter(p =>
        p.skills.some(s => s.toLowerCase() === skill.toLowerCase())
      );
    }

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

module.exports = router;
