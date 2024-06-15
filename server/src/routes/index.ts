import { Hono } from 'hono';
import { helloRouter } from './hello';

const mainRouter = new Hono();

mainRouter.route('/', helloRouter);

export { mainRouter };
