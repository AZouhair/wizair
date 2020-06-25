import axios from "axios";

import { GET_DATA, GET_ERRORS } from "./types";


// Get data
export const getData = (userId) => dispatch => {
  axios
    .get("/api/data?id="+userId)
    .then(
      res => {
      dispatch(setData(res.data));
      }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
  };

export const setData = (data) => {
  return {
    type: GET_DATA,
    payload: data
  };
};
