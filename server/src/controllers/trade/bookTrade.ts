import { Context } from "hono";
import { CreateCertificateService } from "../../services/database/certificate/create";
import { UpdateTraderStatus } from "../../services/database/trader/update";
import { GetTraderStatus } from "../../services/database/trader/get";

var traderInprogress: number[] = [];
const addTraderInprogress = (id: number) => {
	traderInprogress.push(id);
};

const removeTraderInprogress = (id: number) => {
	traderInprogress = traderInprogress.filter((tid) => tid !== id);
};

const isTraderInprogress = (id: number) => {
	return traderInprogress.includes(id);
};

const BookTradeController = async (c: Context) => {
	var tid;
	try {
		const { traderId, userId } = await c.req.json();
		if (!traderId || !userId) {
			return c.json({
				success: false,
				message: "Missing required fields",
				data: null,
			});
		}
		if (isTraderInprogress(traderId)) {
			return c.json({
				success: false,
				message: "This trader is currently unavailable",
				data: null,
			});
		}
		addTraderInprogress(traderId);
		tid = traderId;
		const status = await GetTraderStatus(traderId);
		if (!status) {
			removeTraderInprogress(traderId);
			return c.json({
				success: false,
				message: "Trader unavailable",
				data: null,
			});
		}
		const createTrade = CreateCertificateService({
			traderId,
			userId,
		});
		const updated = UpdateTraderStatus({ id: traderId });
		await createTrade;
		await updated;
		removeTraderInprogress(traderId);
		return c.json({
			success: true,
			message: "Trade booked",
			data: null,
		});
	} catch (e) {
		console.log(e);
		removeTraderInprogress(tid);
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { BookTradeController };
