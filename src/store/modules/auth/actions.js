export function SignInRequest(email, password) {
  return {
    type: '@auth/SING_IN_REQUEST',
    payload: { email, password },
  };
}

export function SignInSuccess(token, user) {
  return {
    type: '@auth/SING_IN_SUCCESS',
    payload: { token, user },
  };
}

export function SignFailure() {
  return {
    type: '@auth/SING_FAILURE',
  };
}
