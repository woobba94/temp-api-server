const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// 기본 미들웨어 설정 (logger, static, cors and no-cache)
server.use(middlewares);

// POST, PUT 및 PATCH를 처리를 위해 바디 파서를 사용
server.use(jsonServer.bodyParser);

server.use(router);

let port = 80;
server.listen(port, () => {
  console.log(`JSON Server is running, port(${port})`);
});
