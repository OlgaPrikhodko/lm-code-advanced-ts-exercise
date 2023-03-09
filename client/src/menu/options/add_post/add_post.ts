import { sendPostToServer } from "../../../api/send_post_to_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export const addPost = async () => {
	clear();
	const title = await prompt("Please enter title ");
	const text = await prompt("Please enter text ");
	const userId = await prompt("Please enter User Id");

	printNewLine();
	print(`📨 Adding new post with title "${title}" for User Id "${userId}"...`);

	const newPost = await sendPostToServer(title, text, userId);
	if (newPost) {
		print(`🥳 Post was added successfully`);
		console.log(newPost);
	} else print("😵 Post was not added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
};
