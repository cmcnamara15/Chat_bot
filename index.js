import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
    console.log(colors.bold.green('Welcome to the Chatbot Program!'));
    console.log(colors.bold.green('You can start chatting with the bot.'));

    while (true) {
        const userInput = readlineSync.question(colors.yellow('You: '));

        try {
            // Call API with user input

            if(userInput.toLowerCase() === 'exit'){
                return;
            }
        } catch (error) {
            console.error(colors.red(error))
        }
    }
}

main()