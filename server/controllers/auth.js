const UserApi = require('../db/api/users');
require('dotenv').config();
const secret = process.env.SECRET;
const tokens = require('../auth/tokens');
const helper = require('../helpers/serialize');

module.exports.registration = async function (req, res) {
    let result;
    try {
        const user = helper.serializeUser(await UserApi.add(req.body));
        let token = await tokens.createTokens(result, secret);
        result = {
            ...user,
            ...token
        }
        res.json(result);
    } catch (error) {
        result = {
            code: 400,
            message: 'Пользователь с таким именем существует'
        };
        res.status(400).json(result);
    }
}
module.exports.login = async function (req, res) {
    const { username, password } = req.body;
    let user = await UserApi.getByLogin(username);
    if (user === null) {
        res.status(400);
        res.json({
            code: '400',
            message: "Invalid login or password"
        });
    }
    if (user.validPassword(password)) {
        user = helper.serializeUser(user);
        let token = await tokens.createTokens(user, secret);
        const result = {
            ...user,
            ...token
        }
        res.json(result)
    } else {
        res.status(400);
        res.json({
            code: '400',
            message: "Invalid login or password"
        })
    }
}
module.exports.refreshtoken = async function (req, res) {
    const refreshToken = req.headers['authorization'];
    const data = await tokens.refreshTokens(refreshToken, UserApi.getById, secret);
    res.json({ ...data });
}