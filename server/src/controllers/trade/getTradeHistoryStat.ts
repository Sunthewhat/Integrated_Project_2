import { Context } from "hono";
import { GetTradeHistoryByUserIdService } from "../../services/database/trade/history/get";

type MonthlySum = {
	January: number;
	February: number;
	March: number;
	April: number;
	May: number;
	June: number;
	July: number;
	August: number;
	September: number;
	October: number;
	November: number;
	December: number;
	undefined: number;
};

const blankMonthlySum: MonthlySum = {
	January: 0,
	February: 0,
	March: 0,
	April: 0,
	May: 0,
	June: 0,
	July: 0,
	August: 0,
	September: 0,
	October: 0,
	November: 0,
	December: 0,
	undefined: 0,
};

const getMonthString = (month: number) => {
	switch (month) {
		case 1:
			return "January";
		case 2:
			return "February";
		case 3:
			return "March";
		case 4:
			return "April";
		case 5:
			return "May";
		case 6:
			return "June";
		case 7:
			return "July";
		case 8:
			return "August";
		case 9:
			return "September";
		case 10:
			return "October";
		case 11:
			return "November";
		case 12:
			return "December";
		default:
			return "undefined";
	}
};

const GetTradeHistoryStat = async (c: Context) => {
	try {
		const userId = c.req.param("id");
		if (!userId) {
			return c.json({
				success: false,
				message: "Missing required fields",
				data: blankMonthlySum,
			});
		}
		const history = await GetTradeHistoryByUserIdService(parseInt(userId));

		const getCurrentYear = () => new Date().getFullYear();

		const getMonth = (date: Date) => new Date(date).getMonth();

		const currentYear = getCurrentYear();

		const filteredHistory = history.filter((entry) => new Date(entry.date).getFullYear() === currentYear);

		const monthlySum: MonthlySum = blankMonthlySum;

		filteredHistory.forEach((entry) => {
			const month = getMonth(entry.date);
			monthlySum[getMonthString(month)] += entry.amount;
		});

		return c.json({
			success: true,
			message: "Trade history retrieved",
			data: monthlySum,
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: blankMonthlySum,
		});
	}
};

export { GetTradeHistoryStat };
