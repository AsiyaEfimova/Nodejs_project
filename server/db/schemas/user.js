const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bCrypt = require('bcryptjs');

const userSchema = new Schema(
    {
        firstName: {
            type: String
        },
        image: {
            type: String
        },
        middleName: {
            type: String
        },
        permission: {
            chat: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
            news: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
            settings: { C: Boolean, R: Boolean, U: Boolean, D: Boolean }
        },
        surName: {
            type: String
        },
        username: {
            type: String,
            required: [true, 'Login is required'],
            unique: true
        },
        accessToken: {
            type: String
        },
        refreshToken: {
            type: String
        },
        accessTokenExpiredAt: {
            type: Number
        },
        refreshTokenExpiredAt: {
            type: Number
        },
        hash: {
            type: String,
            required: [true, 'Password required'],
        }
    },
    { versionKey: false }
);

userSchema.methods.setPassword = function (password) {
    this.hash = bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function (password) {
    return bCrypt.compareSync(password, this.hash);
};

const User = mongoose.model('user', userSchema);

module.exports = User;