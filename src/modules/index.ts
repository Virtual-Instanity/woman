import { Composer } from "grammy";
import { BotContext } from "../types";

import { nekoCommand } from "./neko";
import { dumpCommand } from "./msgdump";
import { oreshnikCommand } from "./oreshnik";

export const composer = new Composer<BotContext>();

composer.command("neko", nekoCommand);
composer.command("msgdump", dumpCommand);
composer.command(["oreshnik", "oreh"], oreshnikCommand);

export const botCommands = [
  {
    command: "neko",
    description: "Получить аниме дефку",
  },
  {
    command: "msgdump",
    description: "Дамп сообщения",
  },
  {
    command: "oreshnik",
    description: "Орешник",
  }
];
