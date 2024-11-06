import { call, takeEvery, select } from "redux-saga/effects";
import { selectTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { SagaIterator } from "redux-saga";
import { DarkMode } from "../../../core/types";

function* saveThemeInLocalStorageHandler(): SagaIterator {
  const darkMode: DarkMode = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, darkMode);
}

export function* themeSaga(): SagaIterator {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}
