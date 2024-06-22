import { Hono } from "hono";
import { GetTradeHistoryController } from "../controllers/trade/getTradeHistory";
import { GetTradeHistoryStat } from "../controllers/trade/getTradeHistoryStat";

const tradeRouter = new Hono();

tradeRouter.get("/history/stats/:id", GetTradeHistoryStat);
tradeRouter.get("/history/:userId", GetTradeHistoryController);

export { tradeRouter };
