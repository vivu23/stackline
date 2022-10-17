import { SORT, FETCH } from "../scripts/constants";
import axios from "axios";

export const sortBy = key => {
  return {
    type: SORT,
    key
  };
};

export const fetchAction = data => {
  return {
    type: FETCH,
    data
  };
};

//Uploaded 'stackline_frontend_assessment_data_2021.json' to myjson.com
export function fetchData() {
  return dispatch => {
    return axios
      .get('http://myjson.dit.upm.es/api/bins/hfsw')
      .then(res => {
        console.log(res);
        const data = JSON.parse(res.request.response)[0];
        return dispatch(fetchAction(data));
      })
      .catch(err => {
        console.log(err);
        return dispatch(fetchAction({}));
      });
  };
}
