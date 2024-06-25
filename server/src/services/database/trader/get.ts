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

const GetTraderStatus = async (id: number) => {
	return (
		(
			await prisma.trader.findUnique({
				where: {
					traderId: id,
				},
			})
		)?.available ?? false
	);
};
export { GetAvailableTraders, GetTraderStatus };
