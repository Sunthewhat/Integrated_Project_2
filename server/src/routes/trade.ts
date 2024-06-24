import { Hono } from "hono";
import { GetTradeHistoryController } from "../controllers/trade/getTradeHistory";
import { GetTradeHistoryStat } from "../controllers/trade/getTradeHistoryStat";
import { GetAvailableTradeController } from "../controllers/trade/getAvailableTrade";
import { BookTradeController } from "../controllers/trade/bookTrade";

const tradeRouter = new Hono();

tradeRouter.get("/history/stats/:id", GetTradeHistoryStat);
tradeRouter.get("/history/:userId", GetTradeHistoryController);
tradeRouter.get("/available/:id", GetAvailableTradeController);
tradeRouter.post("/book", BookTradeController);

export { tradeRouter };
