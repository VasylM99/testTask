import * as Actions from '../actions/users.actions';

const initialState = {
  users: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}

