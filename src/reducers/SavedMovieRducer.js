import { SAVE_MOVIE } from "../actions/Types";

const SavedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case SAVE_MOVIE:
      return action.payload;

    default:
      return state;
  }
};

export default SavedMovieReducer;
