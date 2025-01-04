import { BotContext } from "../../types";

export async function dumpCommand(ctx: BotContext): Promise<void> {
  const {
    message,
    chatMembers: { getChatMember },
  } = ctx;

  const chatMember = await getChatMember();
  const messageToDump = message?.reply_to_message || message;

  if (!messageToDump || chatMember.status !== "administrator")
    return;

  if (!messageToDump.from)
    return;

  const messageJson = JSON.stringify(messageToDump, null, 2);

  await ctx.reply(`<code>${messageJson}</code>`, {
    parse_mode: "HTML",
    reply_parameters: {
      message_id: message?.message_id,
    },
  });
}
