import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('hi');
});

export default routes;
