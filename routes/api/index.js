const router = require('express').Router();

const routes = ['ticket', 'station', 'trip'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
