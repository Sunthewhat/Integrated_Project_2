import { prisma } from "../../../..";

const GetTradeHistoryByUserIdService = async (userId: number) => {
	const data = await prisma.cabonOffset.findMany({
		where: {
			userId: userId,
		},
	});
	return data;
};

export { GetTradeHistoryByUserIdService };
