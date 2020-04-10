// const UserApi = require('../db/api/users');

module.exports.get = function (req, res) {
    // Автоматический GET-запрос на /api/users - получение списка пользователей. Необходимо вернуть список всех пользоватлей из базы данных.
    res.json([{
        firstName: String,
        id: 'Primary key',
        image: String,
        middleName: String,
        permission: {
            chat: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
            news: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
            settings: { C: Boolean, R: Boolean, U: Boolean, D: Boolean }
        },
        surName: String,
        username: String
    }]);
}
module.exports.patch = function (req, res) {
    // PATCH-запрос на /api/users/:id/permission - обновление существующей записи о разрешениях конкретного пользователя. Сигнатура:
    res.json({
        permission: {
            chat: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
            news: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
            settings: { C: Boolean, R: Boolean, U: Boolean, D: Boolean }
        }
    });
}
module.exports.delete = function (req, res) {
    // DELETE-запрос на /api/users/:id - удаление пользователя.
}