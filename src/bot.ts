import { Bot, MemorySessionStorage } from "grammy";
import type { ChatMember } from "grammy/types";

import { chatMembers } from "@grammyjs/chat-members";
import { autoChatAction } from "@grammyjs/auto-chat-action";

import { appConfig } from "./config";
import { BotContext } from "./types";

import {
  botCommands,
  composer as modulesComposer
} from "./modules";

export const bot = new Bot<BotContext>(appConfig.BOT_TOKEN);
const adapter = new MemorySessionStorage<ChatMember>();

bot.use(chatMembers(adapter));
bot.use(autoChatAction());

bot.use(modulesComposer);

if (appConfig.isDev) {
  bot.catch(console.error);
}

bot.api.setMyCommands(botCommands);
