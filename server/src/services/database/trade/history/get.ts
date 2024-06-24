import { prisma } from "../../../..";

type CertificateResponse = {
	certificateId: string;
	userId: number;
	date: Date;
	traderId: number;
	amount: number;
	companyName: string;
	firstname: string;
	lastname: string;
};

const GetTradeHistoryByUserIdService = async (userId: number) => {
	const data = await prisma.certificate.findMany({
		where: {
			userId: userId,
		},
		select: {
			certificateId: true,
			userId: true,
			date: true,
			traderId: true,
			traderCertificate: {
				select: {
					amount: true,
					companyName: true,
				},
			},
			userCertificate: {
				select: {
					firstname: true,
					lastname: true,
				},
			},
		},
	});

	const formattedData: CertificateResponse[] = data.map((e) => {
		return {
			certificateId: e.certificateId,
			userId: e.userId,
			date: e.date,
			traderId: e.traderId,
			amount: e.traderCertificate.amount,
			companyName: e.traderCertificate.companyName,
			firstname: e.userCertificate.firstname || "",
			lastname: e.userCertificate.lastname || "",
		};
	});
	return formattedData;
};

export { GetTradeHistoryByUserIdService };
