import { Context } from 'hono';
import { Hello } from '../../services/hello/hello';

const HelloController = async (c: Context) => {
	return c.text(Hello(5));
};

export { HelloController };
