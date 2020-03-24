import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SAVE_MOVIE,
  EDIT_MOVIE,
  SEARCH_RATING,
  SEARCH_TITLE
} from "../actions/Types";
import { v4 as uuidv4 } from "uuid";
const initial = [
  {
    id: uuidv4(),
    title: "FORZEN II",
    image:
      "https://www.chroniquedisney.fr/imgAnimation/2010/2019-reine-neiges-II-01-big.jpg",
    rating: 5,
    year: "2020"
  },
  {
    id: uuidv4(),
    title: "ALAD'2",
    image: "https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg",
    rating: 3,
    year: "2018"
  },
  {
    id: uuidv4(),
    title: "Roi Lion",
    image: "https://fr.web.img3.acsta.net/pictures/19/02/25/12/06/2908996.jpg",
    rating: 2,
    year: "2019"
  },
  {
    id: uuidv4(),
    title: "FORZEN II",
    image:
      "https://www.chroniquedisney.fr/imgAnimation/2010/2019-reine-neiges-II-01-big.jpg",
    rating: 4,
    year: "2020"
  },
  {
    id: uuidv4(),
    title: "FORZEN II",
    image:
      "https://www.chroniquedisney.fr/imgAnimation/2010/2019-reine-neiges-II-01-big.jpg",
    rating: 3,
    year: "2020"
  }
];
const MoviesReducer = (
  state = { movies: initial, keyword: "", rating: 1 },
  action
) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    //  { ...state, movies: state.movies.concat(action.payload) };
    // ;

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(el => el.id !== action.payload)
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === action.payload.id
            ? { ...el, ...action.payload.updatemovie }
            : el
        )
      };
    case SAVE_MOVIE:
      return state;
    case SEARCH_TITLE:
      return { ...state, keyword: action.payload };

    case SEARCH_RATING:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};
export default MoviesReducer;
