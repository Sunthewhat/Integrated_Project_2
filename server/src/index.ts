import { Hono } from 'hono';
import { mainRouter } from './routes';
import { PrismaClient } from '../prisma/client';
import { config } from 'dotenv';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

config();

const app = new Hono();

app.use(cors());
app.use(logger());

export const prisma = new PrismaClient();

app.route('', mainRouter);

export default app;
