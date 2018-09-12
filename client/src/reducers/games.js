import {
   ADD_GAME,
   DELETE_GAME,
   GET_GAMES_REQUEST,
   GET_GAMES_SUCCESS,
   GET_GAMES_FAILURE,
   GET_GAME_REQUEST,
   GET_GAME_SUCCESS,
   GET_GAME_FAILURE,
   ADD_GAME_REQUEST,
   ADD_GAME_SUCCESS,
   ADD_GAME_FAILURE
} from "../actions/gameActions";

const initialState = { isFetching: false, games: [], game: {} };

const games = (state = initialState, action) => {
   switch (action.type) {
      case GET_GAMES_REQUEST:
         return {
            isFetching: true
         };
      case GET_GAMES_SUCCESS:
         return {
            isFetching: false,
            games: action.games
         };
      case GET_GAMES_FAILURE:
         return {
            isFetching: false,
            message: action.message
         };
      case GET_GAME_REQUEST:
         return {
            isFetching: true
         };
      case GET_GAME_SUCCESS:
         return {
            isFetching: false,
            game: action.game
         };
      case GET_GAME_FAILURE:
         return {
            isFetching: false,
            message: action.message
         };
      case ADD_GAME_REQUEST:
         return {
            isFetching: true
         };
      case ADD_GAME_SUCCESS:
         return {
            isFetching: false,
            games: action.games
         };
      case ADD_GAME_FAILURE:
         return {
            isFetching: false,
            message: action.message
         };
      case DELETE_GAME:
         return { ...state, games: state.games.filter(game => game.id !== action.id) };
      default:
         return state;
   }
};

export default games;
