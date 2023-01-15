require('dotenv').config();
import { Configuration, OpenAIApi } from 'openai';
import tmi from 'tmi.js'
import { BLOCKED_WORDS, REGEX_WORDS } from './constants';


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const options = {
    options: { debug: true },
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: [process.env.TWITCH_CHANNEL_NAME]
};

const client = new tmi.Client(options);

client.connect().catch(console.error);


client.on('message', (channel, tags, message, self) => {
    if (self) return;
    //if (tags.username === process.env.TWITCH_BOT_USERNAME) return;

    // if (message.toLowerCase() === '!hello') {
    //     client.say(channel, `@${tags.username}, heya!`);
    // }
    // if (message.toLowerCase() === '!moche') {
    //     client.say(channel, `@${tags.username} , Effectivement tu es moche !`);
    // }
    if (message.startsWith("!gpt")) {
        useOpenaiApi(tags, message, channel);
    }



    //checkTwitchChat(tags, message, channel);

});


function checkTwitchChat(tags, message, channel) {
    message = message.toLocaleLowerCase();

    let shouldSendMessage = false;
    //shouldSendMessage = BLOCKED_WORDS.some(blockedWord => message.includes(blockedWord.toLocaleLowerCase()));
    shouldSendMessage = REGEX_WORDS.some(regexWord => message.match(regexWord));


    if (shouldSendMessage) {
        //client.say(channel, `@${tags.username}, désolé ! Ton message à été supprimé.`);
        client.say(channel, `...`);
        //client.deletemessage(channel, tags.id);
    }

}



async function useOpenaiApi(tags, message, channel) {
    message = message.toLocaleLowerCase();

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        prompt: message.slice(4)
    });
    client.say(channel, `${tags.username}, ` + completion.data.choices[0].text);
    //console.log(completion.data.choices[0].text);


}