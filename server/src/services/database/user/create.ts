import { prisma } from "../../..";

type CreateUserType = {
	username: string;
	password: string;
	nameTitle: string;
	firstname: string;
	lastname: string;
	email: string;
	expectedMonthly: string;
};

const createUser = async (data: CreateUserType) => {
	const newUser = await prisma.user.create({
		data: {
			username: data.username,
			password: data.password,
			nameTitle: data.nameTitle,
			firstname: data.firstname,
			lastname: data.lastname,
			email: data.email,
			expectedMonthly: data.expectedMonthly,
		},
	});
	return newUser;
};

export { createUser, CreateUserType };
