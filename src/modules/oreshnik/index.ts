import { BotContext } from "../../types";
import { oreshnikPhrases } from "./config";

export async function oreshnikCommand(ctx: BotContext) {
  if (!ctx.message)
    return;

  let orehMessage: string;

  if (ctx.message.reply_to_message?.from) {
    const targetUser = ctx.message.reply_to_message.from;
    const userTag = targetUser?.username
      ? `@${targetUser.username}`
      : `[${targetUser?.id}](tg://user?id=${targetUser?.id})`;

    orehMessage = oreshnikPhrases.individual[
      Math.floor(Math.random() * oreshnikPhrases.individual.length - 1)
    ].replace("{user}", userTag);
  } else {
    orehMessage = oreshnikPhrases.global[
      Math.floor(Math.random() * oreshnikPhrases.global.length - 1)
    ];
  }

  await ctx.reply(orehMessage, {
    parse_mode: "Markdown",
  });

  await ctx.deleteMessage();
}