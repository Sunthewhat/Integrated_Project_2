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

const UpdateUserData = async (
	id: string,
	data: {
		username: string;
		firstname: string;
		lastname: string;
		email: string;
		nameTitle: string;
		expectedMonthly: string;
	}
) => {
	const updatedData = await prisma.user.update({
		where: {
			userId: Number(id),
		},
		data: {
			username: data.username,
			firstname: data.firstname,
			lastname: data.lastname,
			email: data.email,
			nameTitle: data.nameTitle,
			expectedMonthly: data.expectedMonthly,
		},
	});
	return updatedData;
};

export { UpdateUserImage, UpdateUserData };
