import { sendUserToServer } from "../../../api/send_user_to_the_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addUser() {
	clear();

	const userName = await prompt("Please type user's name? ");

	printNewLine();
	print(`📨 Adding user "${userName}"...`);

	const allUsers = await sendUserToServer(userName);

	if (allUsers.length > 0) {
		print(`🥳 User with name "${userName}" was added successfully`);
		print(`🥳 Full list of users: `);
		console.log(allUsers);
	} else print("😵 User was not added.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
