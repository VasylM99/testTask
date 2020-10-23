import axios from 'axios';

export const CREATE_USER= 'CREATE_USER';
export const GET_USERS= 'GET_USERS';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getUsers() {
    return async function (dispatch) {
        const users= await axios.get(`${BASE_URL}/users`);
        dispatch({
            type: GET_USERS,
            payload: users.data
        }); 
    };
}

export function createUser(data) {
    return async function (dispatch) {
        await axios.post(`${BASE_URL}/users`, data);
        dispatch({
            type: CREATE_USER
        }); 
    };
}