import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_BYID,
} from "./actionTypes";
import axios from "axios";

const baseUrl = "https://movie-web-server-production.up.railway.app/";

export function fetchMovieRequest() {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
}

export function fetchMovieSuccess(payload) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: payload,
  };
}

export function fetchMovieFailure(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
}

export function fetchMovieId(payload) {
  return {
    type: FETCH_MOVIE_BYID,
    payload: payload,
  };
}

export function fetchMovies(querySearch) {
  return async (dispatch) => {
    console.log(querySearch);
    dispatch(fetchMovieRequest());

    if (querySearch === "" || !querySearch) {
      querySearch = "";
    }

    try {
      const response = await axios.get(baseUrl + `movie?q=${querySearch}`);
      dispatch(fetchMovieSuccess(response));
    } catch (error) {
      dispatch(fetchMovieFailure(error));
    }
  };
}

export function fetchMovieById(id) {
  return async (dispatch) => {
    dispatch(fetchMovieRequest());

    try {
      const response = await axios.get(baseUrl + `movie/${id}`);
      dispatch(fetchMovieId(response));
    } catch (error) {
      dispatch(fetchMovieFailure(error));
    }
  };
}
