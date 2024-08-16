import { Composer } from "grammy";
import { BotContext } from "../types";

import { nekoCommand } from "./neko";

export const composer = new Composer<BotContext>();

composer.command("neko", nekoCommand);

export const botCommands = [{
  command: "neko",
  description: "Получить аниме дефку",
}];
