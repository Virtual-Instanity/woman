import { Bot, MemorySessionStorage } from "grammy";
import type { ChatMember } from "grammy/types";

import { chatMembers } from "@grammyjs/chat-members";
import { autoChatAction } from "@grammyjs/auto-chat-action";

import { appConfig } from "./config";
import { BotContext } from "./types";
import { logger } from "./logger";

import {
  botCommands,
  composer as modulesComposer
} from "./modules";

const bot = new Bot<BotContext>(appConfig.BOT_TOKEN);
const adapter = new MemorySessionStorage<ChatMember>();

bot.use(chatMembers(adapter));
bot.use(autoChatAction());

bot.use(modulesComposer);

if (appConfig.isDev) {
  bot.catch(logger.error);
}

async function start() {
  await bot.api.setMyCommands(botCommands);

  await bot.start({
    onStart({username, first_name}) {
      logger.info(`Bot https://t.me/${username} (${first_name}) is running!`);
    },
    allowed_updates: [
      "message",
      "chat_member",
    ]
  });
}

start();