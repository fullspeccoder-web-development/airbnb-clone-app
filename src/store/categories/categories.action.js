import { createAction } from "../../utilities/reducer.utils";

export const setOutOfLeftView = (isOutOfView) =>
  createAction("TOGGLE_OUT_OF_LEFT_VIEW", isOutOfView);

export const setOutOfRightView = (isOutOfView) =>
  createAction("TOGGLE_OUT_OF_RIGHT_VIEW", isOutOfView);
