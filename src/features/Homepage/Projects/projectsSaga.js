import { put, delay, call, takeLatest } from "redux-saga/effects";
import {
  fetchProjects,
  fetchProjectsSuccess,
  fetchProjectsError,
} from "./projectsSlice";
import { getProjects } from "./projectsAPI";

function* fetchProjectsHandler() {
  try {
    yield delay(2000);
    const projects = yield call(getProjects);
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsError());
  }
}

export function* projectsSaga() {
  yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}
