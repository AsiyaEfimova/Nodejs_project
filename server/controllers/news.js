const NewsApi = require('../db/api/news');
const UserApi = require('../db/api/users');
const helper = require('../helpers/serialize');
require('dotenv').config();
const secret = process.env.SECRET;
const tokens = require('../auth/tokens');

module.exports.get = async function (req, res) {
    const news = await NewsApi.getNews()
    res.json(news)
}
module.exports.post = async function (req, res, next) {
    try {
        const token = req.headers['authorization']
        const user = await UserApi.getById(await tokens.getUserIdFromToken(token, secret))
        await NewsApi.createNews(req.body, helper.serializeUser(user))
        const news = await NewsApi.getNews()
        res.json(news)
    } catch (e) {
        next(e)
    }
}
module.exports.patch = async (req, res, next) => {
    try {
        await NewsApi.updateNews(req.params.id, req.body)
        const news = await NewsApi.getNews()
        res.json(news)
    } catch (e) {
        next(e)
    }
}
module.exports.delete = async (req, res, next) => {
    try {
        await NewsApi.deleteNews(req.params.id)
        const news = await NewsApi.getNews()
        res.json(news)
    } catch (e) {
        next(e)
    }
}