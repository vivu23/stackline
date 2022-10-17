import { combineReducers } from "redux";
import { SORT, FETCH } from "./constants";

const direction = {
  weekEnding: "asc",
  retailSales: "asc",
  wholesaleSales: "asc",
  unitsSold: "asc",
  retailerMargin: "asc"
};

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH:
      return action.data;

    case SORT:
      if (Object.getOwnPropertyNames(state).length > 0) {
        const key = action.key;

        // Creates copy of state's sales property to avoid mutating state.
        const sales = state.sales.map(salesObj => {
          return Object.assign({}, salesObj);
        });

        // Sorts sales copy by date or number.
        let sortedSales;
        if (key === "weekEnding") {
          sortedSales = sales.sort(
            (a, b) =>
              direction[key] === "asc"
                ? new Date(b[key]).getTime() - new Date(a[key]).getTime()
                : new Date(a[key]).getTime() - new Date(b[key]).getTime()
          );
        } else {
          sortedSales = sales.sort(
            (a, b) =>
              direction[key] === "asc" ? b[key] - a[key] : a[key] - b[key]
          );
        }

        direction[key] = direction[key] === "asc" ? "desc" : "asc";
        return Object.assign({}, state, { sales: sortedSales });
      } else {
        return state;
      }

    default:
      return state;
  }
};

const reducer = combineReducers({
  data: dataReducer
});

export default reducer;