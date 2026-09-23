import { userSettings } from "./settings";
import { Game } from "./game";

export type User = {
  readonly id: string,
  username: string,
  password: string,
  gameList?: Game[],
  userSettings?: userSettings
}