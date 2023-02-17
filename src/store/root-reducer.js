import { combineReducers } from "redux";

import { categoriesReducer } from "./categories/categories.reducer.js";
import { navigationReducer } from "./navigation/navigation.reducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  navigation: navigationReducer,
});
