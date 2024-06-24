import { prisma } from "../../..";

type CreateCertificateType = {
	userId: number;
	traderId: number;
};

const CreateCertificateService = async (d: CreateCertificateType) => {
	const uuid = crypto.randomUUID();
	const data = await prisma.certificate.create({
		data: {
			certificateId: uuid,
			userId: d.userId,
			traderId: d.traderId,
		},
	});
	return data;
};

export { CreateCertificateService };
