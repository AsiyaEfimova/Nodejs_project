const UserApi = require('../db/api/users');
require('dotenv').config();
const helper = require('../helpers/serialize');

module.exports.get = async function (req, res) {
    const userList = await UserApi.getList();
    const result = userList.users.map((user) => helper.serializeUser(user));
    res.json(result);
}
module.exports.patch = async function (req, res) {
    try {
        const user = await UserApi.updatePermission(req.params.id, req.body)
        res.json({
            ...helper.serializeUser(user),
        })
    } catch (error) {
        next(error)
    }
}
module.exports.delete = async function (req, res) {
    try {
        await UserApi.delete(req.params.id)
        res.json({})
    } catch (error) {
        next(error)
    }
}