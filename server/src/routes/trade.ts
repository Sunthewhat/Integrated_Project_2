import { Hono } from "hono";
import { GetTradeHistoryController } from "../controllers/trade/getTradeHistory";
import { GetTradeHistoryStat } from "../controllers/trade/getTradeHistoryStat";
import { GetAvailableTradeController } from "../controllers/trade/getAvailableTrade";

const tradeRouter = new Hono();

tradeRouter.get("/history/stats/:id", GetTradeHistoryStat);
tradeRouter.get("/history/:userId", GetTradeHistoryController);
tradeRouter.get("/available/:id", GetAvailableTradeController);

export { tradeRouter };
