import axios from 'axios';

export const CREATE_POST = 'CREATE_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_POST = 'GET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getPosts(userId) {
    return async function (dispatch) {
        
        const posts = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
        dispatch({
            type: GET_POSTS,
            payload: posts.data
        }); 
    };
}
export function createPost(data) {
    return async function (dispatch) {
        await axios.post(`${BASE_URL}/posts`, data);
        dispatch({
            type: CREATE_POST
        });
        window.location.replace(`/users/${data.userId}/posts`);
    };
}
export function getComments(postId) {
    return async function (dispatch) {
        
        const comments = await axios.get(`${BASE_URL}/comments?postId=${postId}`);
        dispatch({
            type: GET_COMMENTS,
            payload: comments.data
        }); 
    };
}
export function getPost(postId) {
    return async function (dispatch) {
        
        const post = await axios.get(`${BASE_URL}/posts/${postId}`);
        dispatch({
            type: GET_POST,
            payload: post.data
        }); 
    };
};
export function updatePost(postId, data) {
    return async function (dispatch) {
        await axios.put(`${BASE_URL}/posts/${postId}`, data);
        dispatch({
            type: UPDATE_POST
        });
        window.location.replace(`/users/${data.userId}/posts/${postId}/comments`);
    };
}
export function deletePost(postId, userId) {
    return async function (dispatch) {
        await axios.delete(`${BASE_URL}/posts/${postId}`);
        dispatch({
            type: DELETE_POST
        });
        window.location.replace(`/users/${userId}/posts`);
    };
}
