import {put, call, select, delay} from 'redux-saga/effects';

import {Types as UserType} from '../ducks/users';
import {createUser} from '../services/user';

export function* saveUser(data) {
  try {
    const response = yield call(createUser, data);

    // alert(JSON.stringify(response, null, 2));
    // alert(JSON.stringify(response.data));

    yield put({ type: UserType.ADD_USER, payload: response })
  } catch (error) {
    alert(error.message);
  }
}
