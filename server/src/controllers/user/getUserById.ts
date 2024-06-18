import { Context } from "hono";
import { getUserById } from "../../services/database/user/get";

const GetUserById = async (c: Context) => {
	return c.json(await getUserById(Number(c.req.param("id"))));
};

export { GetUserById };
