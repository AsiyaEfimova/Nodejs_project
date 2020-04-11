const UserApi = require('../db/api/users');
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

module.exports.registration = async function (req, res) {
    // POST-запрос на /api/registration - создание нового пользователя (регистрация). Сигнатура запроса: { username, surName, firstName, middleName, password }. Необходимо вернуть объект авторизовавшегося пользователя.
    const result = await UserApi.add(req.body);
    res.json(result);
}
module.exports.login = async function (req, res) {
    // POST-запрос на /api/login - авторизация после пользователького ввода. Cигнатура запроса: { username, password } Необходимо вернуть объект авторизовавшегося пользователя.
    console.log(req.body);
    const { username, password } = req.body;
    const user = await UserApi.getByLogin(username);
    if (user === null) {
        res.status(400);
        res.json({
            code: '400',
            message: "Invalid login or password"
        });
    }
    if (user.validPassword(password)) {
        res.json(user)
    } else {
        res.status(400);
        res.json({
            code: '400',
            message: "Invalid login or password"
        })
    }
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