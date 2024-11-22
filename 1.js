/* eslint-disable */

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
