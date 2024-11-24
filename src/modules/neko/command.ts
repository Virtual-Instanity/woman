import { appConfig } from "../../config";
import { StringBuilder } from "../../helpers";
import { BotContext } from "../../types";
import { getNeko } from "./neko";

export async function nekoCommand(ctx: BotContext) {
  try {
    if (!ctx.message) {
      return;
    }

    ctx.chatAction = "upload_photo";

    const neko = await getNeko();
    const messageId = ctx.message.message_id;

    if (!neko) {
      console.warn("No neko found.");
      await ctx.reply("Не получается получить картинку по запросу.", {
        reply_parameters: {
          message_id: messageId,
          allow_sending_without_reply: true
        }
      });
      return;
    }

    await ctx.replyWithPhoto(neko.url, {
      caption: `Автор: <a href=\"${neko.artist_href}\">${neko.artist_name}</a>. <a href=\"${neko.source_url}\">Сурс</a>\n`,
      parse_mode: "HTML",
      reply_parameters: {
        message_id: messageId,
        allow_sending_without_reply: true
      }
    });

    const sb = new StringBuilder();

    sb.append(`Command: ${ctx.message.text}.`)
      .append(`Chat id: ${ctx.chat?.id} (${ctx.chat?.title ?? ctx.chat?.first_name}).`)
      .appendLine(`From: ${ctx.from?.id} (${ctx.from?.username}).`);

    if (appConfig.isDev) {
      sb.appendLine(`Result:`)
        .appendLine(`Artist href: ${neko.artist_href}`)
        .appendLine(`Artist name: ${neko.artist_name}`)
        .append(`Picture url: ${neko.url}`);
    }

    console.info(sb.toString());

  } catch (error) {
    console.error("Error in nekoCommand:", error);
  }
}