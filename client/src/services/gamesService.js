import { apiBaseUrl } from "../config";

export const getGamesAsync = async () => {
   return await fetch(`${apiBaseUrl}/api/games`);
};

export const getGameByIdAsync = async gameId => {
   return await fetch(`${apiBaseUrl}/api/games/${gameId}`);
};

export const addGameAsync = async newGame => {
   return await fetch(`${apiBaseUrl}/api/games`, {
      method: "POST",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json"
      },
      body: JSON.stringify({ game: newGame })
   });
};
