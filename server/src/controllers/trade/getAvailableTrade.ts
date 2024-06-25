import { Context } from "hono";
import { getUserById } from "../../services/database/user/get";
import { GetAvailableTraders } from "../../services/database/trader/get";

const GetAvailableTradeController = async (c: Context) => {
	try {
		const userId = c.req.param("id");
		const prefer = c.req.param("prefer");
		if (!userId || !prefer) {
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
		const availableTrade = GetAvailableTraders();
		const availableTradeWithPercentage = (await availableTrade).map((e) => {
			return {
				...e,
				percentage: parseFloat(((e.amount / parseInt(prefer)) * 100 - 100).toFixed(2)),
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
