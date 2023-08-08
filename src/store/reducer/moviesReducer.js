import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_BYID,
} from "../actions/actionTypes";

const initialState = {
  movies: [],
  movie: {},
  loading: false,
  error: false,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case FETCH_MOVIE_BYID:
      return {
        ...state,
        movie: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
