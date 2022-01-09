
import { takeEvery, takeLatest, put, delay, all } from "redux-saga/effects";

function* ageUpAsync() {
    yield delay(4000);
    yield put({ type: "AGE_UP_ASYNC", val: 1 })
}

function* ageDownAsync() {
    yield delay(3000);
    yield put({ type: "AGE_DOWN_ASYNC", val: 1 })
}


// export function* watchAgeUp() {
//     yield takeEvery("AGE_UP", ageUpAsync);
// }

// export function* watchAgeDown(){
//     yield takeEvery("AGE_DOWN", ageDownAsync);
// }

export default function* watchAll() {
    yield all([
        takeLatest("AGE_DOWN", ageDownAsync),
        takeEvery("AGE_UP", ageUpAsync)])


}