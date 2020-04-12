const path = require('path');
const express = require('express')
const router = express.Router()

const ctrlNews = require('../controllers/news')
const ctrlUsers = require('../controllers/users')
const ctrlProfile = require('../controllers/profile')
const ctrlAuth = require('../controllers/auth')

router.get('/news', ctrlNews.get)
router.post('/news', ctrlNews.post)
router.patch('/news/:id', ctrlNews.patch)
router.delete('/news/:id', ctrlNews.delete)

router.get('/users', ctrlUsers.get)
router.patch('/users/:id/permission', ctrlUsers.patch)
router.delete('/users/:id', ctrlUsers.delete)

router.get('/profile', ctrlProfile.get)
router.patch('/profile', ctrlProfile.patch)

router.post('/registration', ctrlAuth.registration)
router.post('/login', ctrlAuth.login)
router.post('/refresh-token', ctrlAuth.refreshtoken)

module.exports = router