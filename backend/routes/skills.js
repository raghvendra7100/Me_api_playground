const express = require("express");
const Profile = require("../model/db");
const router = express.Router();

// GET /skills → list all skills (optionally filter by name)
router.get("/", async (req, res) => {
  try {
    const { q, top } = req.query;
    const profile = await Profile.findOne();

    let skills = profile.skills;

    if (q) {
      skills = skills.filter(s =>
        s.name.toLowerCase().includes(q.toLowerCase())
      );
    }
    if (top === "true") {
      skills = skills.filter(s => s.isTop);
    }

    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch skills" });
  }
});

module.exports = router;
