import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";
import SavedMovieReducer from "./SavedMovieRducer";

export default combineReducers({ MoviesReducer, SavedMovieReducer });
