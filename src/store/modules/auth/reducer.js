// import produce from 'immer';

const INITIAL_STATE = {
  profile: { token: 123 },
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* case '@auth/SIGN_IN_SUCCESS':
     return produce(state, draft => {
      draft.profile = action.user;
      }); */
    default:
      return state;
  }
}
