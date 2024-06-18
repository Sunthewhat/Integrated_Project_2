import { prisma } from "../../..";

const getUserByUsername = async (username: string) => {
	return await prisma.user.findFirst({
		where: {
			username: username,
		},
	});
};

const getUserById = async (id: number) => {
	return await prisma.user.findFirst({
		where: {
			userId: id,
		},
	});
};

export { getUserByUsername, getUserById };
