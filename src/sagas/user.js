import { put, call, select, delay } from "redux-saga/effects";

import { Types as UserType } from '../ducks/users';
import { createUser } from '../services/user';

export function* saveUser(data) {
    try {
        console.log("passou aqui");
        const response = yield call(createUser, data);

        yield put({ type: UserType.ADD_USER, payload: response })
    } catch (error) {
        
    }
}