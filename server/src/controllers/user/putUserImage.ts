import { Context } from "hono";
import { UpdateUserImage } from "../../services/database/user/update";

const PutUserImage = async (c: Context) => {
	try {
		const body = await c.req.parseBody();
		const file = body["file"];
		const userId = body["userId"];
		const formData = new FormData();
		formData.append("file", file);
		const response = await fetch("https://upload.sunthewhat.com/upload", {
			method: "PUT",

			body: formData,
		});

		const { key } = await response.json();
		await UpdateUserImage(userId as string, key);
		return c.json({
			success: true,
			message: "Image uploaded",
			data: { key: key },
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { PutUserImage };
