import { Hono } from "hono";
import { authRouter } from "./auth";
import { userRouter } from "./user";
import { tradeRouter } from "./trade";

const mainRouter = new Hono();

mainRouter.route("/auth", authRouter);
mainRouter.route("/user", userRouter);
mainRouter.route("/trade", tradeRouter);

export { mainRouter };
