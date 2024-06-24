import { Context } from "hono";
import { GetTradeHistoryByUserIdService } from "../../services/database/certificate/history/get";

const GetTradeHistoryController = async (c: Context) => {
	try {
		const userId = c.req.param("userId");
		if (!userId) {
			return c.json({
				success: false,
				message: "Missing required fields",
				data: null,
			});
		}
		const tradeHistory = await GetTradeHistoryByUserIdService(parseInt(userId));

		return c.json({
			success: true,
			message: "Trade history retrieved",
			data: tradeHistory,
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { GetTradeHistoryController };
