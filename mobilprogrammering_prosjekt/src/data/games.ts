import { Game } from "@/types/game";

export const games: Game[] = [
  {
    id: "1",
    title: "Game 1",
    boxArtImageURL: "https://placehold.co/300x300/orange/white",
    genres: ["Action", "Adventure"],
    releaseDate: new Date("Feb 07, 2012")
  },
  {
    id: "2",
    title: "Game 2",
    boxArtImageURL: "https://placehold.co/300x300/orange/white",
    genres: ["Strategy", "RPG"],
    releaseDate: new Date("Feb 07, 2023")
  },
  {
    id: "3",
    title: "Game 3",
    boxArtImageURL: "https://placehold.co/300x300/orange/white",
    genres: ["Simulation", "Casual"],
    releaseDate: new Date("Feb 09, 2023")
  }
]