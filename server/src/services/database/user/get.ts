import { prisma } from "../../..";

const getUserByUsername = async (username: string) => {
	return await prisma.user.findFirst({
		where: {
			username: username,
		},
	});
};

export { getUserByUsername };
