import { Context } from 'hono';

const Hello = (times: number) => {
	return `Hello Hono!\n`.repeat(times);
};

export { Hello };
