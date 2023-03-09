import { fetchPost } from "../../../api/fetch_post";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export async function browsePosts() {
	clear("nope");

	const desiredPostIdStr = await prompt("Enter Post ID");
	const desiredPostId = +desiredPostIdStr;

	print(`📨 Fetching post "${desiredPostId}...`);

	if (typeof desiredPostId === "number") {
		const result = await fetchPost(desiredPostId);

		print(`🥳 Received post:`);

		console.log(result);

		return result;
	} else {
		await prompt("⌨️ Please enter correct value for Post Id 🕶️");
	}
	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
}
