/* eslint-disable */
/**
 * По маршруту /api/user/disable-problems администратор системы отправляет запрос
 * на простановку группе пользователей флага problem: false.
 *
 * Необходимо найти всех пользователей по указанной в запросе роли и проставить им нужный флаг.
 * В результате выполнения запроса вернуть количество измененных пользователей в БД за эту операцию.
 * Используется MongoDB / Postgres / MySQL / любая другая БД
 *
 * Junior-разработчик отдал вам на ревью код, необходимо указать комментарии, что тут стоит улучшить.
 * Можете либо указать комментарии текстом, либо написать свой вариант на псевдо-коде
*/

const express = require('express');
const User = require('./Models/User');
const app = express();
app.listen(8080);

let count_changed = 0;

app.post('/api/user/disable-problems', async (req, res) => {
  const { user_role } = req.body;
  const users = await User.find({ role: user_role }); // 1 млн записей

  for (const user of users) {
    if (user.problem) {
      user.problem = false;
      await user.save();

      count_changed++;
    }
  }

  res.send(count_changed);
});

