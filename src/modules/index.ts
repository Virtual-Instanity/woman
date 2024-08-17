import { Composer } from "grammy";
import { BotContext } from "../types";

import { nekoCommand } from "./neko";
import { dumpCommand } from "./msgdump";

export const composer = new Composer<BotContext>();

composer.command("neko", nekoCommand);
composer.command("msgdump", dumpCommand);

export const botCommands = [{
  command: "neko",
  description: "Получить аниме дефку",
}];
