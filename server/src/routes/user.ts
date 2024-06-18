import { Hono } from "hono";
import { GetUserById } from "../controllers/user/getUserById";

const userRouter = new Hono();

userRouter.get("/byId/:id", GetUserById);

export { userRouter };
