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
      : `<a href="tg://user?id=${targetUser?.id}">${targetUser?.id}</a>`;

    orehMessage = oreshnikPhrases.individual[
      Math.floor(Math.random() * oreshnikPhrases.individual.length)
    ].replace("{user}", userTag);
  } else {
    orehMessage = oreshnikPhrases.global[
      Math.floor(Math.random() * oreshnikPhrases.global.length)
    ];
  }

  await ctx.reply(orehMessage, {
    parse_mode: "HTML",
  });

  await ctx.deleteMessage();
}