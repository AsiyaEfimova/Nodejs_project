// Обьект авторизованного пользователя:
// {
//     firstName: String,
//     id: Primary key,
//     image: String,
//     middleName: String,
//     permission: {
//         chat: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
//         news: { C: Boolean, R: Boolean, U: Boolean, D: Boolean },
//         settings: { C: Boolean, R: Boolean, U: Boolean, D: Boolean }
//     }
//     surName: String,
//     username: String,
//     accessToken: String,
//     refreshToken: String,
//     accessTokenExpiredAt: Date (ms),
//     refreshTokenExpiredAt: Date (ms)
// }

module.exports.get = function (req, res) {
    // GET-запрос на /api/profile - авторизация при наличии токена. Необходимо вернуть объект пользователя.
    res.json([{
        id: 1,
        text: 'text',
        title: 'title'
    }]);
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
    res.json({
        firstName: String,
        middleName: String,
        surName: String,
        oldPassword: String,
        newPassword: String,
        avatar: File
    });
}