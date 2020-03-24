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
    year: "2020",
    description:
      "La Reine des neiges (Frozen) est le 128e long-métrage d'animation et le 53e « Classique d'animation » des studios Disney. Sorti en 2013, il est librement inspiré du conte homonyme de Hans Christian Andersen publié en 1844."
  },
  {
    id: uuidv4(),
    title: "ALAD'2",
    image: "https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg",
    rating: 3,
    year: "2018",
    description:
      "Aladdin est un film d'aventure fantastique américain coécrit et réalisé par Guy Ritchie, sorti en 20191. Il s'agit de l’adaptation en prise de vues réelle du film homonyme de 1992"
  },
  {
    id: uuidv4(),
    title: "Roi Lion",
    image: "https://fr.web.img3.acsta.net/pictures/19/02/25/12/06/2908996.jpg",
    rating: 2,
    year: "2019",
    description:
      "Le Roi lion (The Lion King) est le 43e long-métrage d'animation et le 32e « Classique d'animation » des studios Disney. Sorti en 1994, il est inspiré en grande partie de l'œuvre d'Osamu Tezuka Le Roi Léo (1951) et d'Hamlet de William Shakespeare. C'est un gros succès du box-office mondial."
  },
  {
    id: uuidv4(),
    title: "fantastic beasts",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Fantastic_Beasts_-_The_Crimes_of_Grindelwald_Poster.png/220px-Fantastic_Beasts_-_The_Crimes_of_Grindelwald_Poster.png",
    rating: 3,
    year: "2016",
    description:
      "Les Animaux fantastiques (Fantastic Beasts and Where to Find Them) est un film fantastique américano-britannique réalisé par David Yates, sorti en 2016. Le scénario est le premier écrit par la romancière J. K. Rowling, auteur des aventures de Harry Potter, et le film et ses suites prévues constituent une « extension du monde des sorciers » pour les personnes ayant eu connaissance de la saga originelle1. Il s'agit d'une œuvre sérielle dérivée, se focalisant sur plusieurs personnages secondaires mentionnés ou présents dans l'histoire de Harry Potter, et débutant soixante-cinq ans plus tô"
  },
  {
    id: uuidv4(),
    title: "harry potter",
    image:
      "http://media.paperblog.fr/i/387/3876398/harry-potter-reliques-mort-1ere-partie-harry--L-OOKDza.jpeg",
    rating: 5,
    year: "2013",
    description:
      "Harry Potter [ʔaʁi pɔtœʁ]a (en anglais : [ˈhæɹi ˈpɒtə]b) est une série littéraire de fantasy écrite par l'auteure britannique J. K. Rowling, dont la suite romanesque s'est achevée en 2007. Une pièce de théâtre, considérée comme la « huitième histoire » officielle, a été jouée et publiée en 2016. Les livres et le script de la pièce ont été traduits en français par Jean-François Ménard."
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
