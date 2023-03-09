import { baseUrl } from "./base_url";

export async function sendUserToServer(userName: string) {
	try {
		const result = await fetch(baseUrl + "/api/users/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ userName }),
		});

		const json = await result.json();
		const { allUsers } = json;

		return allUsers;
	} catch (e) {
		console.error(e);

		return false;
	}
}
