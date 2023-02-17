import { CATEGORY_TYPES } from "./categories.types";

import { createAction } from "../../utilities/reducer.utils";

export const setOutOfLeftView = (isOutOfView) =>
  createAction(CATEGORY_TYPES.TOGGLE_LEFT_VIEW, isOutOfView);

export const setOutOfRightView = (isOutOfView) =>
  createAction(CATEGORY_TYPES.TOGGLE_RIGHT_VIEW, isOutOfView);
