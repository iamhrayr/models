import {GET_USERS_SUCCESS, GET_USERS_LOADING, GET_USERS_FAILURE} from '../actions/user';

const initialState = {
  fetching: false,
  fetched: false,
  data: {}
};

export function usersReducer(state = initialState, action){
  switch (action.type) {
    case GET_USERS_SUCCESS:
        return {
          fetching: false,
          fetched: true,
          data: action.users
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
