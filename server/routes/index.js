const path = require('path');
const express = require('express')
const router = express.Router()
const authMiddleware = require('../auth/middleware')

const ctrlNews = require('../controllers/news')
const ctrlUsers = require('../controllers/users')
const ctrlProfile = require('../controllers/profile')
const ctrlAuth = require('../controllers/auth')

router.get('/news', authMiddleware, ctrlNews.get)
router.post('/news', authMiddleware, ctrlNews.post)
router.patch('/news/:id', authMiddleware, ctrlNews.patch)
router.delete('/news/:id', authMiddleware, ctrlNews.delete)

router.get('/users', authMiddleware, ctrlUsers.get)
router.patch('/users/:id/permission', authMiddleware, ctrlUsers.patch)
router.delete('/users/:id', authMiddleware, ctrlUsers.delete)

router.get('/profile', authMiddleware, ctrlProfile.get)
router.patch('/profile', authMiddleware, ctrlProfile.patch)

router.post('/registration', ctrlAuth.registration)
router.post('/login', ctrlAuth.login)
router.post('/refresh-token', ctrlAuth.refreshtoken)

module.exports = router