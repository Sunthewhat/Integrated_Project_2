import { prisma } from "../../..";

const getUserByUsername = async (username: string) => {
	return await prisma.user.findFirst({
		where: {
			username: username,
		},
	});
};

const getUserById = async (id: number) => {
	const data = await prisma.user.findFirst({
		where: {
			userId: id,
		},
	});
	return data;
};

export { getUserByUsername, getUserById };
