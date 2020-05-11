import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));

    toast.success('Perfil atualizado com sucesso');
  } catch (err) {
    yield put(updateProfileFailure());

    toast.error('Erro ao atualizar perfil, confira seus dados!');
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
