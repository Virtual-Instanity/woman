import { cleanEnv, str } from "envalid";

export const appConfig = cleanEnv(process.env, {
  NODE_ENV: str({
      choices: [
        'development',
        'test',
        'production',
        'staging'
      ]
    }
  ),
  BOT_TOKEN: str(),
});