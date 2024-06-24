import { Context } from "hono";
import { getUserById } from "../../services/database/user/get";
import { GetAvailableTraders } from "../../services/database/trader/get";

const GetAvailableTradeController = async (c: Context) => {
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
		const expectedMonthly = userData.expectedMonthly ? parseInt(userData.expectedMonthly.replaceAll("kgCO2eq", "").replaceAll(",", "").trim()) : 0;
		const availableTrade = GetAvailableTraders();
		const availableTradeWithPercentage = (await availableTrade).map((e) => {
			return {
				...e,
				percentage: parseFloat(((e.amount / expectedMonthly) * 100 - 100).toFixed(2)),
			};
		});

		const sorted = availableTradeWithPercentage.sort((a, b) => Math.abs(a.percentage) - Math.abs(b.percentage));

		return c.json({
			success: true,
			message: "User retrieved",
			data: sorted,
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { GetAvailableTradeController };
