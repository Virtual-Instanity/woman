import { run } from "@grammyjs/runner";
import { bot } from "./bot";

const runner = run(bot, {
  runner: {
    fetch: {
      allowed_updates: [
        "message",
        "chat_member",
        "message_reaction",
      ]
    }
  }
});

console.log(`Bot started...`);

process.on("SIGINT", () => {
  handleShoutdown();
});

process.on("SIGTERM", () => {
  handleShoutdown();
});

async function handleShoutdown() {
  console.log("Shutting down...");
  await runner.stop();
}