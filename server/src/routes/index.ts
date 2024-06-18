import { Hono } from "hono";
import { authRouter } from "./auth";
import { userRouter } from "./user";

const mainRouter = new Hono();

mainRouter.route("/auth", authRouter);
mainRouter.route("/user", userRouter);

export { mainRouter };
