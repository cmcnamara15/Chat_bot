import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
    console.log(colors.bold.green('Welcome to the Chatbot Program!'));
    console.log(colors.bold.green('You can start chatting with the bot.'));

    // Store conversation history
    const chatHistory = []; 

    while (true) {
        const userInput = readlineSync.question(colors.yellow('You: '));

        try {
            // construct messages by iterating over the history
            const messages = chatHistory.map(([role, content]) => ({ role, content }))

            // Add latest user input
            messages.push({ role: 'user', content: userInput })

            // Call API with user input
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: messages,
            })

            // Get completion text/content
            const completionText = completion.data.choices[0].message.content;

            if(userInput.toLowerCase() === 'exit'){
                console.log(colors.green('Bot: ') + completionText)
                return;
            }

            console.log(colors.green('Bot: ') + completionText)
        } catch (error) {
            console.error(colors.red(error))
        }
    }
}

main()