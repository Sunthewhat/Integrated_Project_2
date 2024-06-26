import { Context } from "hono";
import { UpdateUserData } from "../../services/database/user/update";

const UpdateUserDataController = async (c: Context) => {
	try {
		const { userId, username, nameTitle, lastname, email, expectedMonthly, firstname, company } = await c.req.json();
		const result = await UpdateUserData(userId, {
			username,
			firstname,
			lastname,
			email,
			nameTitle,
			expectedMonthly,
			company,
		});
		return c.json({
			success: true,
			message: "User data updated",
			data: result,
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { UpdateUserDataController };
