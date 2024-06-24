import { Context } from "hono";
import { GetTradeHistoryByUserIdService } from "../../services/database/certificate/history/get";
import { getUserById } from "../../services/database/user/get";

const GetUserTradeInfo = async (c: Context) => {
	try {
		const userId = c.req.param("id");

		if (!userId) {
			return c.json({
				success: false,
				message: "Missing required fields",
				data: null,
			});
		}
		const userData = await getUserById(parseInt(userId));
		if (!userData) {
			return c.json({
				success: false,
				message: "User not found",
				data: null,
			});
		}
		const tradeHistory = await GetTradeHistoryByUserIdService(parseInt(userId));
		return c.json({
			success: true,
			message: "Trade history retrieved",
			data: {
				totalCarbonOffset: tradeHistory.reduce((acc, curr) => acc + curr.amount, 0),
				totalCertificates: tradeHistory.length,
				expectedMonthlyCarbonOffset: userData.expectedMonthly,
			},
		});
	} catch (e) {
		console.log(e);

		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { GetUserTradeInfo };
