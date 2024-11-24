import { INeko } from "./types/neko.interface";
import { IApiResponse } from "./types/response.interface";

export async function getNeko(): Promise<INeko | null> {
  try {
    const response = await fetch("https://nekos.best/api/v2/neko");

    if (!response.ok) {
      console.warn("Failed to fetch neko:", response.status);
      return null;
    }

    const json: IApiResponse = await response.json();

    return json.results.length > 0 ? json.results[0] : null;
  } catch (error) {
    console.error("Failed to fetch neko:", error);
    return null;
  }
}
