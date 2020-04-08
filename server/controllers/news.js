// Обьект новости:
// {
//     id: Primary key,
//     created_at: Date,
//     text: String,
//     title: String,
//     user: {
//         firstName: String,
//         id: Key,
//         image: String,
//         middleName: String,
//         surName: String,
//         username: String
//     }
// }

module.exports.get = function (req, res) {
    // GET-запрос на /api/news - получение списка новостей. Необходимо вернуть список всех новостей из базы данных.
    console.log(1);

    res.json([{
        id: 1,
        text: 'text',
        title: 'title'
    }]);
}
module.exports.post = function (req, res) {
    // POST-запрос на /api/news - создание новой новости. Сигнатура запроса: { text, title }. Необходимо вернуть обновленный список всех новостей из базы данных.
    res.json([{
        id: 1,
        text: 'text',
        title: 'title'
    }, {
        id: 2,
        text: 'text2',
        title: 'title2'
    }]);
}
module.exports.patch = function (req, res) {
    // PATCH-запрос на /api/news/:id - обновление существующей новости. Сигнатура запроса: { text, title }. Необходимо вернуть обновленный список всех новостей из базы данных.
    res.json([{
        id: 1,
        text: 'text1',
        title: 'title1'
    }, {
        id: 2,
        text: 'text2',
        title: 'title2'
    }]);
}
module.exports.delete = function (req, res) {
    // DELETE-запрос на /api/news/:id - удаление существующей новости. Необходимо вернуть обновленный список всех новостей из базы данных.
    res.json([{
        id: 1,
        text: 'text1',
        title: 'title1'
    }]);
}