import { NAVIGATION_TYPES } from "./navigation.types";

import { createAction } from "../../utilities/reducer.utils";

export const toggleProfile = (bool) =>
  createAction(NAVIGATION_TYPES.TOGGLE_PROFILE, bool);
export const toggleSearchNav = (bool) =>
  createAction(NAVIGATION_TYPES.TOGGLE_SEARCH_NAV, bool);
