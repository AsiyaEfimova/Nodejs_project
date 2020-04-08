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

module.exports.registradtion = function (req, res) {
    // POST-запрос на /api/registration - создание нового пользователя (регистрация). Сигнатура запроса: { username, surName, firstName, middleName, password }. Необходимо вернуть объект авторизовавшегося пользователя.
    res.json({
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
        username: String,
        accessToken: String,
        refreshToken: String,
        accessTokenExpiredAt: Date(ms),
        refreshTokenExpiredAt: Date(ms)
    });
}
module.exports.login = function (req, res) {
    // POST-запрос на /api/login - авторизация после пользователького ввода. Cигнатура запроса: { username, password } Необходимо вернуть объект авторизовавшегося пользователя.
    res.json({
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
        username: String,
        accessToken: String,
        refreshToken: String,
        accessTokenExpiredAt: Date(ms),
        refreshTokenExpiredAt: Date(ms)
    });
}
module.exports.refreshtoken = function (req, res) {
    // POST-запрос на /api/refresh-token - обновление access-токена. В headers['authorization'] прикрепить refresh-токен. Вернуть обьект с токенами
    res.json({
        accessToken: String,
        refreshToken: String,
        accessTokenExpiredAt: Date(ms),
        refreshTokenExpiredAt: Date(ms)
    })
}