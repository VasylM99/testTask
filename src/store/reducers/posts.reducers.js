import * as Actions from '../actions/posts.actions';


const initialState = {
  posts: [],
  comments: [],
  post: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case Actions.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case Actions.GET_POST:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
}