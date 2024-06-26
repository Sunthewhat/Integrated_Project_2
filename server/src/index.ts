import { Hono } from "hono";
import { config } from "dotenv";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { mainRouter } from "./routes";
import { PrismaClient } from "../prisma/client";

config();

const app = new Hono();

app.use(cors());
app.use(logger());

export const prisma = new PrismaClient();

app.route("", mainRouter);

export default {
	port: process.env.PORT || 3000,
	fetch: app.fetch,
};
