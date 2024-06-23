import { prisma } from "../../..";

const UpdateUserImage = async (id: string, image: string) => {
	const data = await prisma.user.update({
		where: {
			userId: Number(id),
		},
		data: {
			profileImage: image,
		},
	});
	return data;
};

export { UpdateUserImage };
