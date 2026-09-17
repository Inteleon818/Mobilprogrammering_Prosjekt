import { userSettings } from "./settings";
import { Game } from "./game";

export type User = {
  id: string,
  name: string,
  gameList: Game[],
  userSettings: userSettings
}