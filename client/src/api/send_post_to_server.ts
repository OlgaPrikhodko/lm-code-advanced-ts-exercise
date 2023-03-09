import { baseUrl } from "./base_url";

export const sendPostToServer = async (
	title: string,
	text: string,
	userId: string
) => {
	try {
		const result = await fetch(`${baseUrl}/api/posts/add`, {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify({ title, text, userId }),
		});

		const json = await result.json();
		const { newPost } = json;

		return newPost;
	} catch (error) {
		console.error(error);
		return false;
	}
};
