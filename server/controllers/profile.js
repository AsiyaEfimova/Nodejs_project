const UserApi = require('../db/api/users');
require('dotenv').config();
const secret = process.env.SECRET;
const tokens = require('../auth/tokens');
const helper = require('../helpers/serialize');

module.exports.get = async function (req, res) {
    const token = req.headers['authorization'];
    const user = await tokens.getUserByToken(token, UserApi.getById, secret);
    console.log(helper.serializeUser(user));
    res.json({
        ...helper.serializeUser(user)
    })
}
module.exports.patch = function (req, res) {
    // PATCH-запрос на /api/profile - обновление информации о пользователе. Сигнатура запроса:
    // {
    //     firstName: String,
    //     middleName: String,
    //     surName: String,
    //     oldPassword: String,
    //     newPassword: String,
    //     avatar: File
    // }
    const token = req.headers['authorization'];


    res.json({
        firstName: String,
        middleName: String,
        surName: String,
        oldPassword: String,
        newPassword: String,
        avatar: File
    });
}