const http = require('http');

const { port, host, defaultAnswer, nodeEnv } = require('./config');

const server = http.createServer((req, res) => {
  res.end(defaultAnswer);
  console.log('Response sent');
});

server.listen(port, host, () =>
  console.log(`Server started: [${server.address().address}]:${server.address().port} (${nodeEnv})`),
);
