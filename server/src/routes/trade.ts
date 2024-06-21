import { Hono } from "hono";
import { GetTradeHistoryController } from "../controllers/trade/getTradeHistory";

const tradeRouter = new Hono();

tradeRouter.get("/history/:userId", GetTradeHistoryController);

export { tradeRouter };
