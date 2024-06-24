import { prisma } from "../../..";

const GetAvailableTraders = async () => {
	const data = await prisma.trader.findMany({
		where: {
			available: true,
		},
		select: {
			amount: true,
			companyName: true,
			traderId: true,
		},
	});
	return data;
};
export { GetAvailableTraders };
