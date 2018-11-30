const TelegramBot = require('node-telegram-bot-api');
const token = '795299470:AAF33zCRStjwpIf_-fk8CxRckXOEzaomfjw';

const bot = new TelegramBot(token, {polling: true});

bot.getChatMember()

