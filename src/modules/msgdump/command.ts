import { BotContext } from "../../types";

export async function dumpCommand(ctx: BotContext) {
  const chatMember = await ctx.chatMembers.getChatMember();

  if (!ctx.message || chatMember.status === "member") return;

  const message_to_dump = ctx.message?.reply_to_message || ctx.message;

  if (!message_to_dump.from) return;
  
  await ctx.reply(`<code>${JSON.stringify(message_to_dump, null, 2)}</code>`, {
    parse_mode: 'HTML',
    reply_parameters: {
      message_id: ctx.message?.message_id,
    }
  });
}