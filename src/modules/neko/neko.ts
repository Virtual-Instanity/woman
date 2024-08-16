export async function getNeko() {
  const response = await fetch("https://nekos.best/api/v2/neko");
  const json = await response.json();

  return json.results[0];
}