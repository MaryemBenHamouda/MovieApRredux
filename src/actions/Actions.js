import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SAVE_MOVIE,
  EDIT_MOVIE,
  SEARCH_TITLE,
  SEARCH_RATING
} from "./Types";
import { act } from "react-dom/test-utils";

export const AddMovie = newmovie => {
  return {
    type: ADD_MOVIE,
    payload: newmovie
  };
};
export const DeleteMovie = id => {
  return {
    type: DELETE_MOVIE,
    payload: id
  };
};

export const SaveMovie = newmovie => {
  return {
    type: SAVE_MOVIE,
    payload: newmovie
  };
};

export function EditMovie(id, updatemovie) {
  return {
    type: EDIT_MOVIE,
    payload: { id, updatemovie }
  };
}
export function SearchTitle(title) {
  return {
    type: SEARCH_TITLE,
    payload: title
  };
}
export function SearchRating(rating) {
  return {
    type: SEARCH_RATING,
    payload: rating
  };
}
