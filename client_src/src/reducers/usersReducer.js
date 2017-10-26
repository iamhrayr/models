import {GET_USERS_SUCCESS, GET_USERS_LOADING, GET_USERS_FAILURE} from '../actions/user';

const initialState = {
  fetching: false,
  fetched: false
};

export function usersReducer(state = initialState, action){
  switch (action.type) {
    case GET_USERS_SUCCESS:
        return {
          ...action.users,
          fetching: false,
          fetched: true
        };
    case GET_USERS_LOADING:
      return {
        ...state,
        fetching: true
      }
    default:
        return state;
  }
}
