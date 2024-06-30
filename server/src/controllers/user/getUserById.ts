import { Context } from "hono";
import { getUserById } from "../../services/database/user/get";

const GetUserById = async (c: Context) => {
	try {
		const userId = c.req.param("id");
		if (!userId) {
			return c.json({
				success: false,
				message: "Missing required fields",
				data: null,
			});
		}
		const userData = await getUserById(parseInt(userId));
		if (!userData) {
			return c.json({
				success: false,
				message: "User not found",
				data: null,
			});
		}

		return c.json({
			success: true,
			message: "User retrieved",
			data: userData,
		});
	} catch (e) {
		console.log(e);
		return c.json({
			success: false,
			message: "Internal server error",
			data: null,
		});
	}
};

export { GetUserById };
