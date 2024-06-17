import { Hono } from "hono";
import { authRouter } from "./auth";

const mainRouter = new Hono();

mainRouter.route("/auth", authRouter);

export { mainRouter };
