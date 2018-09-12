import { generateGameUrl } from "../helpers/gameHelpers";
import { getGamesAsync, getGameByIdAsync, addGameAsync } from "../services/gamesService";

export const GET_GAMES_REQUEST = "GET_GAMES_REQUEST";
export const GET_GAMES_SUCCESS = "GET_GAMES_SUCCESS";
export const GET_GAMES_FAILURE = "GET_GAMES_FAILURE";

export const GET_GAME_REQUEST = "GET_GAME_REQUEST";
export const GET_GAME_SUCCESS = "GET_GAME_SUCCESS";
export const GET_GAME_FAILURE = "GET_GAME_FAILURE";

export const ADD_GAME_REQUEST = "ADD_GAME_REQUEST";
export const ADD_GAME_SUCCESS = "ADD_GAME_SUCCESS";
export const ADD_GAME_FAILURE = "ADD_GAME_FAILURE";

export const DELETE_GAME = "DELETE_GAME";

/* Get Games */
const getGamesRequest = () => ({
   type: GET_GAMES_REQUEST
});

const getGamesSuccess = games => ({
   type: GET_GAMES_SUCCESS,
   games
});

const getGamesFailure = message => ({
   type: GET_GAMES_FAILURE,
   message
});

export const getGamesAction = () => async dispatch => {
   dispatch(getGamesRequest());

   try {
      const responseRaw = await getGamesAsync();
      const response = await responseRaw.json();

      if (response.games) {
         dispatch(getGamesSuccess(response.games));
      } else {
         dispatch(getGamesFailure(response));
      }
   } catch (error) {
      dispatch(getGamesFailure(error));
   }
};

/* Get Game by ID */
const getGameRequest = () => ({
   type: GET_GAME_REQUEST
});

const getGameSuccess = game => ({
   type: GET_GAME_SUCCESS,
   game
});

const getGameFailure = message => ({
   type: GET_GAME_FAILURE,
   message
});

export const getGameAction = gameId => async dispatch => {
   dispatch(getGameRequest());

   try {
      const responseRaw = await getGameByIdAsync(gameId);
      const response = await responseRaw.json();

      if (response.game) {
         dispatch(getGameSuccess(response.game));
      } else {
         dispatch(getGameFailure(response));
      }
   } catch (error) {
      dispatch(getGameFailure(error));
   }
};

/* Add Game */
const addGameRequest = () => ({
   type: ADD_GAME_REQUEST
});

const addGameSuccess = games => ({
   type: ADD_GAME_SUCCESS,
   games
});

const addGameFailure = message => ({
   type: ADD_GAME_FAILURE,
   message
});

export const addGameAction = newGame => async dispatch => {
   dispatch(addGameRequest());

   try {
      const responseRaw = await addGameAsync(newGame);
      const response = await responseRaw.json();

      if (response.games) {
         dispatch(addGameSuccess(response.games));
      } else {
         dispatch(addGameFailure("An error occurred saving this game."));
      }
   } catch (error) {
      dispatch(addGameFailure(error));
   }
};

// TODO: deleteGame should have a request, success, and failure action
export const deleteGame = id => ({
   type: DELETE_GAME,
   id
});
