import { Context } from "hono";
import { getUserByUsername } from "../../services/database/user/get";

const VerifyUserController = async (c: Context) => {
	try {
		const body = await c.req.json();

		const username = body.username;
		const password = body.password;

		console.log("username: ", username, "password: ", password);

		if (!username || !password) {
			return c.json({
				success: false,
				message: "Missing required fields",
				data: null,
			});
		}
		const user = await getUserByUsername(username);
		if (!user) {
			return c.json({
				success: false,
				message: "User not found",
				data: null,
			});
		}
		console.log("user: ", user);

		const passwordMatch = await Bun.password.verify(password, user.password);
		if (!passwordMatch) {
			return c.json({
				success: false,
				message: "Incorrect password",
				data: null,
			});
		}
		return c.json({
			success: true,
			message: "User verified",
			data: {
				userId: user.userId,
				username: user.username,
				nameTitle: user.nameTitle,
				firstname: user.firstname,
				lastname: user.lastname,
				email: user.email,
				expectedMonthly: user.expectedMonthly,
			},
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { VerifyUserController };
