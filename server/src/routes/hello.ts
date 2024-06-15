import { Hono } from 'hono';
import { HelloController } from '../controllers/hello/hello';

const helloRouter = new Hono();

helloRouter.get('', HelloController);

export { helloRouter };
