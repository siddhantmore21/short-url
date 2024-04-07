const express = require('express');
const { homePage, generateShortUrl, redirectShortUrl } = require('../controllers/short-url');
const { login, signUp, loginForm, signUpForm, logout } = require('../controllers/user')
const { authenticateUser } = require('../middlewares/auth')
const router = express.Router();

router.get("/",authenticateUser, homePage)
router.get("/r/:shortId",authenticateUser, redirectShortUrl)
router.post("/short-url/api/generateShortUrl",authenticateUser, generateShortUrl)

// users routes
router.get("/signUpForm", signUpForm)
router.get("/loginForm", loginForm)
router.post("/signUp", signUp)
router.post("/login", login)
router.post("/logout", logout)

module.exports = router;