const News = require('../schemas/news');
const helper = require('../../helpers/serialize');

module.exports.getNews = async () => {
    const news = await News.find()
    return news.map((news) => helper.serializeNews(news))
}
module.exports.createNews = async (data, user) => {
    const { title, text } = data
    const news = new News({
        title,
        text,
        created_at: new Date(),
        user,
    })
    return await news.save()
}
module.exports.updateNews = async (id, data) => {
    return await News.findByIdAndUpdate({ _id: id }, { $set: data })
}
module.exports.deleteNews = async (id) => {
    return News.findByIdAndRemove({ _id: id })
}