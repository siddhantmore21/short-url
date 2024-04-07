const express = require('express');
const { homePage, generateShortUrl, redirectShortUrl } = require('../controllers/short-url');
const router = express.Router();

router.get("/", homePage);  // Home page route
router.get("/r/:shortId", redirectShortUrl);  // Redirect short URL route
router.post("/short-url/api/generateShortUrl", generateShortUrl);  // Generate short URL route

module.exports = router;