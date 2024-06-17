import { Hono } from "hono";
import { CreateUserController } from "../controllers/auth/createUser";
import { VerifyUserController } from "../controllers/auth/verifyUser";

const authRouter = new Hono();

authRouter.post("/register", CreateUserController);
authRouter.post("/login", VerifyUserController);

export { authRouter };
