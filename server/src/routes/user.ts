import { Hono } from "hono";
import { GetUserById } from "../controllers/user/getUserById";
import { GetUserTradeInfo } from "../controllers/user/getUserTradeInfo";
import { PutUserImage } from "../controllers/user/putUserImage";
import { UpdateUserDataController } from "../controllers/user/updateUserData";

const userRouter = new Hono();

userRouter.get("/byId/:id", GetUserById);
userRouter.get("/tradeInfo/:id", GetUserTradeInfo);
userRouter.put("/update/image", PutUserImage);
userRouter.post("/update/data", UpdateUserDataController);

export { userRouter };
