import { Context } from "hono";
import { createUser } from "../../services/database/user/create";
import { getUserByUsername } from "../../services/database/user/get";

const CreateUserController = async (c: Context) => {
	try {
		const { username, password, nameTitle, firstname, lastname, email, expectedMonthly } = await c.req.json();
		if (!username || !password || !nameTitle || !firstname || !lastname || !email || !expectedMonthly) {
			return c.json({
				success: false,
				message: "Missing required fields",
				data: null,
			});
		}
		const userWithThisUsername = await getUserByUsername(username);
		if (userWithThisUsername) {
			return c.json({
				success: false,
				message: "Username already exists",
				data: null,
			});
		}
		const hashedPassword = await Bun.password.hash(password);
		await createUser({
			username,
			password: hashedPassword,
			nameTitle,
			firstname,
			lastname,
			email,
			expectedMonthly,
		});
		return c.json({
			success: true,
			message: "User created",
			data: null,
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { CreateUserController };
