const Order = require("#Components/Order"); // 100 000 000 записей

const Controller = async () => {
  const orders = await Order.Model.find();
  const sum = 0;

  for (const order of orders) {
    sum += order.recount(); // Какая-то долгая синхронная функция
  }
  return sum;
};

const server = require("express");

server.post("/api/healthcheck", (req, res) => {
  // какой-то легкий запрос
  res.send("ok");
});

server.post("/api/recount", async (req, res) => {
  res.send(await Controller());
});
