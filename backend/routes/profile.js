const express = require("express");
const Profile = require("../model/db");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

module.exports = router;
