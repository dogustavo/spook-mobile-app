import { takeLatest, all, take } from 'redux-saga/effects'

import { Types as UserType } from '../ducks/users';
import { saveUser } from '../sagas/user';

export default function* root() {
    yield takeLatest(UserType.ADD_USER, saveUser);
}