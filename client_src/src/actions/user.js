import axios from 'axios';

export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_LOADING = 'GET_USERS_LOADING';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const GET_USERS_DETAILS_SUCCESS = 'GET_USERS_DETAILS_SUCCESS';
export const GET_USERS_DETAILS_LOADING = 'GET_USERS_DETAILS_LOADING';
export const GET_USERS_DETAILS_FAILURE = 'GET_USERS_DETAILS_FAILURE';

export function getUsers(){
  return dispatch => {
    dispatch({
      type: GET_USERS_LOADING
    });

    return axios.get('http://localhost:3000/api/UserModels')
      .then(res => {
        dispatch({
          type: GET_USERS_SUCCESS,
          users: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_USERS_FAILURE
        });
      })
  }
}

export function login(email, password){
  return dispatch => {
    return axios.post('http://localhost:3000/api/UserModels/login', {email, password});
  }
}

export function signup(email, password){
  return dispatch => {
    return axios.post('http://localhost:3000/api/UserModels', {email, password});
  }
}


export function getUsersDetails(id){
  return dispatch => {
    // dispatch({
    //   type: GET_USERS_DETAILS_LOADING
    // });
    //
    // return axios.get('http://localhost:3000/api/UserModels')
    //   .then(res => {
    //     dispatch({
    //       type: GET_USERS_DETAILS_SUCCESS,
    //       users: res.data
    //     })
    //   })
    //   .catch(err => {
    //     dispatch({
    //       type: GET_USERS_DETAILS_FAILURE
    //     });
    //   })

    return axios.get(`http://localhost:3000/api/UserModels/${id}/modelInfos`);
  }
}








export function signout(){

}
