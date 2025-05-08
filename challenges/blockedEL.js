const { log } = require('node:console');
const http = require('node:http');

const Order = {
  count: (i) => {
    if (i % 100 === 0) {
      log(i);
    }

    return i;
  },
};

const Controller = async () => {
  const orders = Array(10000000).fill(null).map((_, i) => i);
  let sum = 0;

  return new Promise((resolve) => {
    const next = (i = 0) => {
      if (i === orders.length) {
        return resolve(sum.toString());
      }

      setImmediate(() => {
        sum += Order.count(orders[i]);
        next(i + 1);
      });
    };

    next();
  });
};

const server = http.createServer(async (req, res) => {
  log('request received');

  if (req.url === '/task') {
    return res.end(await Controller());
  }

  res.end('OK');
});

server.listen(3000, () => log('started'));
