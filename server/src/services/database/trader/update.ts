import { prisma } from "../../..";

const UpdateTraderStatus = async (data: { id: number }) => {
	const updated = await prisma.trader.update({
		where: {
			traderId: data.id,
		},
		data: {
			available: false,
		},
	});
	return updated;
};

export { UpdateTraderStatus };
