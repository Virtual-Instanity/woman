import { Context } from "grammy"
import type { ChatMembersFlavor } from "@grammyjs/chat-members";
import type { AutoChatActionFlavor } from "@grammyjs/auto-chat-action";

export type BotContext = 
  Context & 
  ChatMembersFlavor & 
  AutoChatActionFlavor;
