const express = require('express')
const router = express.Router()

const ctrlNews = require('../controllers/news')
const ctrlUsers = require('../controllers/users')
const ctrlProfile = require('../controllers/profile')
const ctrlAuth = require('../controllers/auth')

router.get('/', (req, res) => {
    res.render('index', { title: 'Server!!!' });
})

router.get('/api/news', ctrlNews.get)
router.post('/api/news', ctrlNews.post)
router.patch('/api/news/:id', ctrlNews.patch)
router.delete('/api/news/:id', ctrlNews.delete)

router.get('/api/users', ctrlUsers.get)
router.patch('/api/users/:id/permission', ctrlUsers.patch)
router.delete('/api/users/:id', ctrlUsers.delete)

router.get('/api/profile', ctrlProfile.get)
router.patch('/api/profile', ctrlProfile.patch)

router.post('/api/registration', ctrlAuth.registradtion)
router.post('/api/login', ctrlAuth.login)
router.post('/api/refresh-token', ctrlAuth.refreshtoken)

module.exports = router