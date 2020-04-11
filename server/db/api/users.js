const mongoose = require('mongoose');
const Users = require('../schemas/user');

module.exports.getList = async () => {
    const users = await Users.find();
    return { users };
}

module.exports.getById = function (id) {
    return Users.findOne({ _id: id })
}

module.exports.add = function (data) {
    const User = new Users({
        firstName: data.firstName,
        middleName: data.middleName,
        surName: data.surName,
        username: data.username
    });
    User.setPassword(data.password);
    return User.save()
}

module.exports.update = function (data, id) {
    const User = new Users({
        firstName: data.firstname,
        middleName: data.patronicname,
        surName: data.lastname,
        username: data.username
    })
    return Users.findByIdAndUpdate(
        {
            _id: id,
        },
        {
            $set: User,
        },
        { new: true },
    )
}

module.exports.delete = function (id) {
    return Users.findByIdAndRemove({ _id: id })
}